resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "Access S3 bucket ${aws_s3_bucket.website.bucket}"
}

resource "aws_route53_record" "domain" {
  name    = "card-wod.com"
  type    = "A"
  zone_id = data.aws_route53_zone.zone.id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
  }
}

resource "aws_cloudfront_distribution" "website" {
  default_cache_behavior {
    allowed_methods = [
      "HEAD",
      "GET",
    ]

    cached_methods = [
      "HEAD",
      "GET",
    ]

    forwarded_values {
      cookies {
        forward = "none"
      }

      query_string = false
    }

    target_origin_id       = "S3-${aws_s3_bucket.website.id}"
    viewer_protocol_policy = "https-only"
    default_ttl            = 86400
    max_ttl                = 31536000
    smooth_streaming       = false
  }

  default_root_object = "/index.html"

  aliases = compact(["card-wod.com"])

  // Redirect missing pages back to the index.html
  // This is particularly useful for React Apps (in fact required if they use React Router)
  dynamic "custom_error_response" {
    for_each = [404, 403]
    iterator = error_code
    content {
      error_code         = error_code.value
      response_code      = 200
      response_page_path = "index.html"
    }
  }

  enabled = true

  origin {
    domain_name = "${aws_s3_bucket.website.id}.s3.amazonaws.com"
    origin_id   = "S3-${aws_s3_bucket.website.id}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    minimum_protocol_version = "TLSv1"
    ssl_support_method       = "ni-only"
  }

  is_ipv6_enabled = true
  http_version    = "http1.1"

//  logging_config {
//    bucket          = "${var.log_bucket_name}.s3.amazonaws.com"
//    include_cookies = false
//    prefix          = "${var.bucket_name}/cloudfront"
//  }
}