import { Test, TestingModule } from '@nestjs/testing';
import { GameInstanceController } from './game-instance.controller';

describe('GameInstance Controller', () => {
  let controller: GameInstanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameInstanceController],
    }).compile();

    controller = module.get<GameInstanceController>(GameInstanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
