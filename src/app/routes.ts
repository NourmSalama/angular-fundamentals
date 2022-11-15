import { Routes } from '@angular/router';
import { Error404Component } from "./errors/404.components";

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
} from './events';

export const appRoutes:Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/new', component: CreateEventComponent  , canDeactivate: ['canDeactivateCreateEvent'], resolve: {events : EventListResolver}  },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  }
]
