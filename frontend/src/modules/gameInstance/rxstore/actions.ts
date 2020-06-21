import { ActionsUnion, createAction } from '@rxsv/core';

import { GameInstance } from '@/modules/gameInstance/models/gameInstance';
import { CreateInstance } from '../models/createInstance';

export const CREATE_INSTANCE_REQUEST = 'CREATE_INSTANCE_REQUEST';
export const CREATE_INSTANCE_SUCCESS = 'CREATE_INSTANCE_SUCCESS';
export const CREATE_INSTANCE_FAILED = 'CREATE_INSTANCE_FAILED';

export const InstanceActions = {
    createInstanceRequest: (newInstanceData: CreateInstance) =>
        createAction(CREATE_INSTANCE_REQUEST, newInstanceData),
    createInstanceFail: (msg: string) => createAction(CREATE_INSTANCE_FAILED, msg),
    createInstanceSuccess: (gameInstance: GameInstance) =>
        createAction(CREATE_INSTANCE_SUCCESS, gameInstance)
};

export type InstanceActionsTypes = ActionsUnion<typeof InstanceActions>;
