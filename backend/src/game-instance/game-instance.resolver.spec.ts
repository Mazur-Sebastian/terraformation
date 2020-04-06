import { Test, TestingModule } from '@nestjs/testing';
import { GameInstanceResolver } from './game-instance.resolver';

describe('GameInstanceResolver', () => {
  let resolver: GameInstanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameInstanceResolver],
    }).compile();

    resolver = module.get<GameInstanceResolver>(GameInstanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
