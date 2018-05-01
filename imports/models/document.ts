export interface Document {
  _id?: string;
  name: string;
  updated: Date;
  authorId: string;
  content?: string;
}
