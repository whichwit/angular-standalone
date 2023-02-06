import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class effects {
    constructor(
        private actions$: Actions,
    ) { }
}