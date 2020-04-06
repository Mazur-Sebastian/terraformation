import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { GameInstanceDto } from './dto/game-instance.dto';
import { GameInstance } from './models/game-instance.model';
import { GameInstanceService } from './game-instance.service';

@Resolver('GameInstance')
export class GameInstanceResolver {
    constructor(private readonly gameInstanceService: GameInstanceService) {}
    @Mutation(returns => GameInstanceDto)
    async createInstance(
        @Args('creatorId') creatorId: string,
    ): Promise<GameInstance> {
        return this.gameInstanceService.createInstance(creatorId);
    }

    @Query(returns => GameInstanceDto)
    async getGameInstance(): Promise<GameInstance[]> {
        return this.gameInstanceService.getInstance();
    }
}
