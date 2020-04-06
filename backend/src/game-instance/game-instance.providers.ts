import { Connection } from 'mongoose';

import { GameInstanceSchema } from './schemas/game-instance.schema';
import { DATABASE_CONNECTION } from 'src/constants/config';
import { GAME_INSTANCE_SCHEMA } from 'src/constants/schemas';

export const gameInstanceProviders = [
    {
        provide: GAME_INSTANCE_SCHEMA,
        useFactory: (connection: Connection) =>
            connection.model('game-instance', GameInstanceSchema),
        inject: [DATABASE_CONNECTION],
    },
];
