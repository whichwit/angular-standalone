import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { RootComponent } from './app/components/root/root.component';
import { UserListComponent } from './app/components/user-list/user-list.component';
import { reducers, metaReducers } from './app/state/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './app/components/not-found/not-found.component';


bootstrapApplication(RootComponent, {
  providers: [
    provideRouter([
      { path: 'user-list', component: UserListComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '', pathMatch: 'full', redirectTo: 'user-list' },
      { path: '**', redirectTo: 'user-list' }
    ]),
    importProvidersFrom(
      // configure NgRx modules
      StoreModule.forRoot(reducers, { metaReducers }), BrowserAnimationsModule,
      // RouterStoreConnectingModule.forRoot(),
      // StoreDevtoolsModule.instrument(),
      // EffectsModule.forRoot([RouterEffects, AuthEffects]),
    ),
  ]
});
