import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CoreActions } from '../actions';

export const featureKey = 'core';

export interface State {
  topSkip: string;
}

const initialState: State = {
  topSkip: '3em',
};

export const reducer = createReducer(
  initialState,
  on(CoreActions.setTopSkip,  (state, {payload}) => ({ ...state, topSkip: payload })),
);

export const coreState = createFeatureSelector<State>(featureKey);

export const topSkip = createSelector(
  coreState,
  state => state.topSkip
)