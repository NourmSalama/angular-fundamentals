import { Routes } from '@angular/router';
import { EventsListComponent } from "./events/events.list.component";
import { EventDetailsComponent } from "./events/shared/event-details/event-details.componets";
import { CreateEventComponent } from "./create-event.component";
import { Error404Component } from "./errors/404.components";
import { EventRouteActivator } from "./events/shared/event-details/event-route-activator.service";

export const appRoutes:Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  ]
