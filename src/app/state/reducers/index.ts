import { isDevMode } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromRouter from '@ngrx/router-store';
import * as fromCore from './core.reducer';
import * as fromUsers from './users.reducer';


export interface State {
  [fromCore.featureKey]: fromCore.State
  [fromUsers.featureKey]: fromUsers.State
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  [fromCore.featureKey]: fromCore.reducer,
  [fromUsers.featureKey]: fromUsers.reducer,
  router: fromRouter.routerReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [logger, localStorageSyncReducer] : [localStorageSyncReducer];




// /**
//  * Every reducer module's default export is the reducer function itself. In
//  * addition, each module should export a type or interface that describes
//  * the state of the reducer plus any selector functions. The `* as`
//  * notation packages up all of the exports into a single object.
//  */
// import { InjectionToken } from '@angular/core';

// /**
//  * As mentioned, we treat each reducer like a table in a database. This means
//  * our top level state interface is just a map of keys to inner state types.
//  */
// export interface State {
//   [fromCharts.featureKey]: fromCharts.State;
//   [fromSearch.featureKey]: fromSearch.State;
//   [fromCensus.featureKey]: fromCensus.State;
//   [fromAuth.featureKey]: fromAuth.State;
//   [fromPdfs.featureKey]: fromPdfs.State;
//   router: fromRouter.RouterReducerState<any>;
// }

// /**
//  * Our state is composed of a map of action reducer functions.
//  * These reducer functions are called with each dispatched action
//  * and the current or initial state and return a new immutable state.
//  */
// export const ROOT_REDUCERS = new InjectionToken<
//   ActionReducerMap<State, Action>
// >('Root reducers token', {
//   factory: () => ({
//     [fromUsers.featureKey]: fromCharts.reducer,
//     [fromSearch.featureKey]: fromSearch.reducer,
//     [fromCensus.featureKey]: fromCensus.reducer,
//     [fromAuth.featureKey]: fromAuth.reducer,
//     [fromPdfs.featureKey]: fromPdfs.reducer,
//     router: fromRouter.routerReducer,
//   }),
// });

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: [fromUsers.featureKey, 'router', fromCore.featureKey],
    rehydrate: true
  })(reducer);
}