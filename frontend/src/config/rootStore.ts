import {
    createStore,
    Store,
    Effect,
    combineReducers,
    combineEffects
} from '@rxsv/core';
import { withDevTools } from '@rxsv/tools';

import * as fromGameInstance from '@/modules/gameInstance/rxstore';

import { rootService } from './rootService';

export const rootReducer = combineReducers({
    gameInstance: fromGameInstance.instanceReducer
});

export const rootEffect = combineEffects(
    ...[fromGameInstance.gameInstanceEffectFactory].map(fn => fn(rootService))
);

export const store = withDevTools(createStore(rootReducer, rootEffect));

export type AppAction = fromGameInstance.InstanceActionsTypes;
export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = Store<AppAction, AppState>;
export type AppEffect = Effect<AppAction, AppState>;
