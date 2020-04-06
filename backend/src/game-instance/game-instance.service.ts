import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { GAME_INSTANCE_SCHEMA } from 'src/constants/schemas';
import { GameInstance } from './models/game-instance.model';

@Injectable()
export class GameInstanceService {
    constructor(
        @Inject(GAME_INSTANCE_SCHEMA)
        private readonly gameInstanceModel: Model<GameInstance>,
    ) {}

    createInstance(id: string) {
        const createdInstance = new this.gameInstanceModel({ users: [id] });
        console.log({ createdInstance });
        return createdInstance.save();
    }

    async getInstance() {
        const gameInstances = await this.gameInstanceModel.find();
        console.log({ gameInstances }, gameInstances[0]);

        return gameInstances;
    }
}
