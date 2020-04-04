import { Module } from '@nestjs/common';

import { GameInstanceModule } from './game-instance/game-instance.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { CardsModule } from './cards/cards.module';

@Module({
    imports: [GameInstanceModule, BoardModule, UserModule, CardsModule],
})
export class AppModule {}
