import { response } from '../../lib/functions/response';
import { uuid } from 'uuidv4';
import DynamoDB from 'aws-sdk/clients/dynamodb';
import { Event, Sport, EventType, toEnum } from './Event';

const ddb = new DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME || 'event';

export const handler = async (event, _context, callback) => {
  const b = JSON.parse(event.body);

  const eventType = toEnum(b.type, EventType);
  const eventSport = toEnum(b.sport, Sport);

  if (eventType && eventSport) {
    const createEvent: Event = {
      id: uuid(),
      created: new Date().toISOString(),
      startTime: b.startTime,
      title: b.title,
      type: toEnum(b.type, EventType),
      sport: toEnum(b.sport, Sport),
      description: b.description,
      maxParticipants: b.maxParticipants,
      location: b.location,
    };

    return ddb
      .put({
        TableName: tableName,
        Item: createEvent,
      })
      .promise()
      .then(() => {
        callback(null, response.success(201, createEvent));
      })
      .catch((err) => callback(null, response.failure(err.statusCode, err)));
  }

  return callback(null, response.failure(401, JSON.parse('Bad input')));
};
