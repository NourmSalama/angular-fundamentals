import { Routes } from '@angular/router';
import { EventsListComponent } from "./events/events.list.component";
import { EventDetailsComponent } from "./events/shared/event-details/event-details.componets";

export const appRoutes:Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path : 'events/:id', component: EventDetailsComponent }
  ]
