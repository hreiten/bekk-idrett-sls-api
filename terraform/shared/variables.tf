variable "app_namespace" {
  description = "The namespace of the service."
  type        = string
}

variable "app_service_name" {
  description = "The specific name of the service."
  type        = string
}

variable "env" {
  description = "Name of environment, e.g. prod, test, qa."
  type        = string
  default     = "prod"
}

variable "hosted_zone_name" {
  description = "Name of Route 53 hosted zone"
  type        = string
}

variable "domain_name" {
  description = "Domain name for environment (e.g. test.example.com or example.com)"
  type        = string
}

variable "region" {
  description = "AWS region (e.g. eu-west-1)"
  type        = string
}
