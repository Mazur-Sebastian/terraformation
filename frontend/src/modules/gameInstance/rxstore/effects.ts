import { GameInstance } from '../models/gameInstance';
import { ofType } from '@rxsv/core';
import { switchMap, map, pluck } from 'rxjs/operators';

import { RootService } from '@/config/rootService';
import { AppEffect } from '@/config/rootStore';

import { InstanceActions, CREATE_INSTANCE_REQUEST } from './actions';

export function gameInstanceEffectFactory({ newGameService }: RootService): AppEffect {
    const createInstanceEffect: AppEffect = action$ =>
        action$.pipe(
            ofType(CREATE_INSTANCE_REQUEST),
            pluck('payload'),
            switchMap(query =>
                newGameService.createNewGame(query).pipe(
                    map(res => {
                        console.log('res', res);
                        return InstanceActions.createInstanceSuccess({} as GameInstance);
                    })
                    // catchError((err: string) =>
                    //     of(InstanceActions.createInstanceFail(err))
                    // )
                )
            )
        );

    return createInstanceEffect;
}
