import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { EMPTY, from } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';

import { UserListActions } from './actions'

@Injectable()
export class effects {
    navigated$ = createEffect(() => this.actions$.pipe(
        ofType(routerNavigatedAction),
        tap(r => console.log(r))
    ), { dispatch: false }
    );

    constructor(
        private actions$: Actions,
    ) { }
}