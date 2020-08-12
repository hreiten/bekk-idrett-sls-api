data "aws_api_gateway_rest_api" "api" {
  name = "${var.env}-bekk-idrett-api"
}

data "aws_acm_certificate" "cert" {
  domain   = "bekk-idrett.halvoraws.com"
  statuses = ["ISSUED"]
}

resource "aws_api_gateway_domain_name" "custom_domain" {
  domain_name              = var.domain_name
  regional_certificate_arn = data.aws_acm_certificate.cert.arn
  security_policy          = "TLS_1_2"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_base_path_mapping" "main" {
  api_id = data.aws_api_gateway_rest_api.api.id
  domain_name = aws_api_gateway_domain_name.custom_domain.id
  stage_name = var.env
  base_path = var.env
}
