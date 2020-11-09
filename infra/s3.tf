resource "aws_s3_bucket" "website" {
  bucket = "card-wod.com"
  acl    = "private"
}

resource "aws_s3_bucket_policy" "cloudfront_only" {
  bucket = aws_s3_bucket.website.id

  policy = <<EOF
{
   "Version":"2012-10-17",
   "Id":"PolicyForCloudFrontPrivateContent",
   "Statement":[
     {
       "Sid":" Grant a CloudFront Origin Identity access to support private content",
       "Effect":"Allow",
       "Principal": {
           "AWS": [
              "${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"
          ]
        },
       "Action": "s3:GetObject",
       "Resource":"arn:aws:s3:::${aws_s3_bucket.website.bucket}/*"
     }
   ]
}
EOF
}