import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsListComponent } from './events/events.list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventServices} from "./events/shared/event.services";
import { ToastrService } from "./common/toastr.service";

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
    EventServices,
    ToastrService
  ],
  bootstrap: [
    EventsAppComponent
  ]
})

export class AppModule {
}
