module "event_table" {
  source                       = "github.com/cloudposse/terraform-aws-dynamodb.git?ref=72078cb"
  stage                        = var.env
  name                         = "Event"
  hash_key                     = "id"
  range_key                    = "startTime"
  autoscale_write_target       = 50
  autoscale_read_target        = 50
  autoscale_min_read_capacity  = 5
  autoscale_max_read_capacity  = 20
  autoscale_min_write_capacity = 5
  autoscale_max_write_capacity = 20
  enable_autoscaler            = false

  dynamodb_attributes = [
    {
      name = "id"
      type = "S"
    },
    {
      name = "startTime"
      type = "S"
    },
    { name = "sport",
      type = "S"
    },
  ]

  local_secondary_index_map = [
    {
      name               = "Sport-LocalIndex"
      range_key          = "sport"
      projection_type    = "ALL"
      non_key_attributes = []
    }
  ]

}
