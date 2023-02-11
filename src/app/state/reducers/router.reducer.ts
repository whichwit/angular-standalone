import { Params } from '@angular/router';
import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// `router` is used as the default feature name. You can use the feature name
// of your choice by creating a feature selector and pass it to the `getRouterSelectors` function
export const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
    selectCurrentRoute, // select the current route
    selectFragment, // select the current route fragment
    selectQueryParams, // select the current route query params
    selectQueryParam, // factory function to select a query param
    selectRouteParams, // select the current route params
    selectRouteParam, // factory function to select a route param
    selectRouteData, // select the current route data
    selectRouteDataParam, // factory function to select a route data param
    selectUrl, // select the current url
    selectTitle, // select the title if available
} = getRouterSelectors();


export const selectRouteNestedParams = createSelector(selectRouter, (router) => {
    let currentRoute = router?.state?.root;
    let params: Params = {};
    while (currentRoute?.firstChild) {
        currentRoute = currentRoute.firstChild;
        params = {
            ...params,
            ...currentRoute.params,
        };
    }
    return params;
});

export const selectRouteNestedParam = (param: string) =>
    createSelector(selectRouteNestedParams, (params) => params && params[param]);