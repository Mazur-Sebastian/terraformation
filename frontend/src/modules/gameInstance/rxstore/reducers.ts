import { Reducer } from '@rxsv/core';

import { GameInstance } from '@/modules/gameInstance/models/gameInstance';

import {
    CREATE_INSTANCE_REQUEST,
    CREATE_INSTANCE_SUCCESS,
    CREATE_INSTANCE_FAILED
} from './actions';
import { AppAction } from '@/config/rootStore';

const initialInstanceState = {
    isLoading: false,
    gameInstance: {} as GameInstance
};

type InstanceState = typeof initialInstanceState;

export const instanceReducer: Reducer<AppAction, InstanceState> = (
    state = initialInstanceState,
    action
) => {
    switch (action.type) {
        case CREATE_INSTANCE_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case CREATE_INSTANCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                gameInstance: action.payload as GameInstance
            };
        case CREATE_INSTANCE_FAILED:
            return {
                ...state,
                isLoading: false,
                gameInstance: {} as GameInstance
            };
        default:
            return state;
    }
};
