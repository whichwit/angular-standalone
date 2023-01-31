import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { RootComponent } from './app/components/root/root.component';
import { UserListComponent } from './app/components/user-list/user-list.component';
import { reducers, metaReducers } from './app/state/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


bootstrapApplication(RootComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'user-list', pathMatch: 'full' },
      { path: 'user-list', component: UserListComponent }
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
