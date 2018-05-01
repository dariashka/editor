import { Message } from './message';

export interface Document {
  _id?: string;
  name: string;
  updated: Date;
  authorId: string;
  content?: string;
  chat: Array<Message>;
}

