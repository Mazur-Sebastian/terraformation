import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';

import { GameInstanceService } from './game-instance.service';
import { GameInstanceResolver } from './game-instance.resolver';
import { gameInstanceProviders } from './game-instance.providers';

@Module({
    imports: [DatabaseModule],
    providers: [
        GameInstanceService,
        GameInstanceResolver,
        ...gameInstanceProviders,
    ],
})
export class GameInstanceModule {}
