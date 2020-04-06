import { Module } from '@nestjs/common';

import { GameInstanceService } from './game-instance.service';
import { GameInstanceResolver } from './game-instance.resolver';
import { gameInstanceProviders } from './game-instance.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [
        GameInstanceService,
        GameInstanceResolver,
        ...gameInstanceProviders,
    ],
})
export class GameInstanceModule {}
