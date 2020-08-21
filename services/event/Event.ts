/* eslint-disable @typescript-eslint/no-explicit-any */
export enum Sport {
  Fotball = 'Fotball',
  Håndball = 'Håndball',
  Innebandy = 'Innebandy',
  Squash = 'Squash',
  Volleyball = 'Volleyball',
}

export enum EventType {
  Kamp = 'Kamp',
  Trening = 'Trening',
}

export const toEnum = (value: string, EnumObj: any) => {
  if (value in EnumObj) {
    return EnumObj[value];
  }
};

export interface Event {
  id: string;
  created: string;
  startTime: string;
  title: string;
  sport: Sport;
  type: EventType;
  description: string;
  maxParticipants: number;
  location: string;
}
