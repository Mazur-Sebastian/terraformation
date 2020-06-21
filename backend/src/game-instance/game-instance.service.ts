import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GAME_INSTANCE_SCHEMA } from './../constants/schemas';
import { GameInstance } from './models/game-instance.model';
import { InstanceCreateInput } from './dto/instance-create.dto';

@Injectable()
export class GameInstanceService {
    constructor(
        @Inject(GAME_INSTANCE_SCHEMA)
        private readonly gameInstanceModel: Model<GameInstance>
    ) {}

    createInstance(instanceCreateInput: InstanceCreateInput) {
        const { creatorId, instanceName, extension } = instanceCreateInput;
        const createdInstance = new this.gameInstanceModel({
            users: [creatorId],
            instanceName,
            extensions: [extension],
        });

        const instance = createdInstance.save();

        return instance;
    }

    async getInstance() {
        const gameInstances = await this.gameInstanceModel.find();

        return gameInstances;
    }
}
