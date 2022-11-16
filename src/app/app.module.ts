import { NgModule } from '@angular/core';
import { appRoutes } from "./routes";
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from "./common/toastr.service";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./errors/404.components";

// Events imports
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventServices,
  EventRouteActivator,
  EventListResolver,
  CreateEventComponent
} from './events';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventServices,
    ToastrService,
    EventListResolver,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [
    EventsAppComponent
  ]
})

export class AppModule {}


export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}
