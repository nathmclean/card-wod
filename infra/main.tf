terraform {
  backend "remote" {
    organization = "card-wod" # org name from step 2.
    workspaces {
      name = "card-wod" # name for your app's state.
    }
  }
}

provider "aws" {
  region              = "us-east-1"
  allowed_account_ids = ["841692805411"]
}

data "aws_route53_zone" "zone" {
  name = "card-wod.com"
}