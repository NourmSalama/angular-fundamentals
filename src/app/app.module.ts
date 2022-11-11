import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsListComponent } from './events/events.list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventDetailsComponent } from "./events/shared/event-details/event-details.componets";
import { NavBarComponent } from './nav/navbar.component';
import { EventServices} from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)

  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
  ],
  providers: [
    EventServices,
    ToastrService
  ],
  bootstrap: [
    EventsAppComponent
  ]
})

export class AppModule {
}
