import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { GameInstanceDto } from './dto/game-instance.dto';
import { GameInstance } from './models/game-instance.model';
import { GameInstanceService } from './game-instance.service';
import { InstanceCreateInput } from './dto/instance-create.dto';

@Resolver('GameInstance')
export class GameInstanceResolver {
    constructor(private readonly gameInstanceService: GameInstanceService) {}
    @Mutation((returns) => GameInstanceDto)
    async createInstance(
        @Args('instanceCreateInput') instanceCreateInput: InstanceCreateInput
    ): Promise<GameInstance> {
        return this.gameInstanceService.createInstance(instanceCreateInput);
    }

    @Query((returns) => GameInstanceDto)
    async getGameInstance(): Promise<GameInstance[]> {
        return this.gameInstanceService.getInstance();
    }
}
