/* eslint-disable @typescript-eslint/no-explicit-any */
interface ResponseType {
  statusCode: number;
  body: string;
  headers: {
    'Access-Control-Allow-Origin': string;
  };
}

export const response = {
  success: (statusCode: number, body: any): ResponseType => ({
    statusCode,
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
  failure: (statusCode: number, errorBody: any): ResponseType => ({
    statusCode,
    body: JSON.stringify(errorBody),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
};
