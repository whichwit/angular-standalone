import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { EMPTY, from } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, distinctUntilChanged, filter } from 'rxjs/operators';

import { CoreActions, UserListActions } from './actions'
import * as fromRouter from './reducers/router.reducer'

@Injectable()
export class effects {
    // navigated$ = createEffect(() => this.actions$.pipe(
    //     ofType(routerNavigatedAction),
    //     concatLatestFrom(() => this.store.select(fromRouter.selectCurrentRoute)),
    //     map(([{ payload }, route]) => {

    //         console.log(route)

    //         console.log(route.routeConfig.path)
    //         return CoreActions.setTopSkip({ payload: '3em' })
    //     })
    // )
    // );


    // navigated2$ = createEffect(() => this.store.select(fromRouter.selectCurrentRoute).pipe(
    //     map(route => route.data['topSkip']),
    //     filter(x => !!x),
    //     distinctUntilChanged(),
    //     tap(x => console.log('d', x)),
    //     map(x => CoreActions.setTopSkip({ payload: x }))
    // )//, { dispatch: false }
    // );

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store,
    ) { }
}