locals {
  app_namespace    = "bekk-idrett"
  app_service_name = "sls"
  env              = "dev"
  region           = "eu-west-1"
  hosted_zone_name = "bekk-idrett.halvoraws.com"
  domain_name      = "sls.bekk-idrett.halvoraws.com"
}

provider "aws" {
  version = "~> 2.7"
  region  = local.region
}

module "bekk-idrett-dev" {
  source           = "../shared"
  app_namespace    = local.app_namespace
  app_service_name = local.app_service_name
  domain_name      = local.domain_name
  region           = local.region
  hosted_zone_name = local.hosted_zone_name
  env              = local.env
}

