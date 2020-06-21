import { UserSchema } from './schemas/user.schema';
import { Connection } from 'mongoose';

import { USER_SCHEMA } from '../constants/schemas';
import { DATABASE_CONNECTION } from '../constants/config';

export const userProviders = [
    {
        provide: USER_SCHEMA,
        useFactory: (connection: Connection) => connection.model('user', UserSchema),
        inject: [DATABASE_CONNECTION],
    },
];
