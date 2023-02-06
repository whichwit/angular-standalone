import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { User } from '@app/models';

export const UserListActions = createActionGroup({
  source: 'User List',
  events: {
    // defining an event without payload using the `emptyProps` function
    'Load': emptyProps(),

    'Load Successful': props<{ users: User[] }>(),
    
    // defining an event with payload using the `props` function
    'Pagination Changed': props<{ page: number; offset: number }>(),
    
    // defining an event with payload using the props factory
    'Query Changed': (query: string) => ({ query }),
  }
});