import { response } from '../../lib/functions/response';
import AWS from 'aws-sdk';

const ddb = new AWS.DynamoDB.DocumentClient();

export const handler = async (event, _context, callback) =>
  ddb
    .scan({ TableName: process.env.TABLE_NAME })
    .promise()
    .then((res) => {
      callback(null, response.success(200, res.Items));
    })
    .catch((err) => callback(null, response.failure(err.statusCode, err)));
