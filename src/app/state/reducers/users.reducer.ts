import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../../models'
import { createFeatureSelector, createReducer, createSelector, on, select } from '@ngrx/store';

export const featureKey = 'users';


export interface State extends EntityState<User> {
    selectedId: string;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
});

export const initialState: State = adapter.getInitialState({
    selectedId: '',
});

export const reducer = createReducer(
    initialState,
)

export const userState = createFeatureSelector<State>(featureKey);

export const {
    selectIds: selectUserIds,
    selectEntities: selectUserEntities,
    selectAll: selectAllUsers,
    selectTotal: selectTotalUsers,
} = adapter.getSelectors(userState);

export const currentId = createSelector(
    userState,
    (state: State) => state.selectedId
)
