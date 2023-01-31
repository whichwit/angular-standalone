import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';

import { RootComponent } from './app/components/root/root.component';
import { UserListComponent } from './app/components/user-list/user-list.component';

bootstrapApplication(RootComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'user-list', pathMatch: 'full' },
      { path: 'user-list', component: UserListComponent }
    ]),
  ]
});
