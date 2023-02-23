import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { effects } from '@app/state/effects';

import { RootComponent } from '@app/containers'
import {
  UserListComponent,
  NotFoundComponent,
} from '@app/components';
import { reducers, metaReducers } from '@app/state/reducers';
import { provideRouterStore } from '@ngrx/router-store';
import { AppComponent } from '@app/containers/app.component';

const routes: Route[] = [
  { path: 'not-found', component: NotFoundComponent, data: { topSkip: '5em' } },
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'user-list'},
      { path: 'user-list', component: UserListComponent, data: { topSkip: '3em' } },
    ]
  },
  { path: '**', redirectTo: 'not-found' }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideEffects(effects),
    provideRouterStore(),
    importProvidersFrom(
      // configure NgRx modules
      // StoreModule.forRoot(reducers, { metaReducers }),
      BrowserAnimationsModule,
      // RouterStoreConnectingModule.forRoot(),
      // StoreDevtoolsModule.instrument(),
      // EffectsModule.forRoot([RouterEffects, AuthEffects]),
    ),
  ]
});
