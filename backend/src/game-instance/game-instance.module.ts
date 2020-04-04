import { Module } from '@nestjs/common';
import { GameInstanceController } from './game-instance.controller';
import { GameInstanceService } from './game-instance.service';

@Module({
  controllers: [GameInstanceController],
  providers: [GameInstanceService]
})
export class GameInstanceModule {}
