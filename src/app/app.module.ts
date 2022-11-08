import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsListComponent } from './events/events.list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventServices} from "./events/shared/event.services";

@NgModule({
    imports: [
    BrowserModule,
    NgbModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
  ],
  providers: [
    EventServices
  ],
  bootstrap: [
    EventsAppComponent
  ]
})

export class AppModule {
}
