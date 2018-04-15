import { MongoObservable } from 'meteor-rxjs';

import { Document } from '../models/document';

export const Documents = new MongoObservable.Collection<Document>('documents');
