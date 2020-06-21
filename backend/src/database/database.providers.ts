import * as mongoose from 'mongoose';

import { DATABASE_CONNECTION } from './../constants/config';

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect(
                process.env.MONGO_URI || 'mongodb://localhost:27017/terraformation'
            ),
    },
];
