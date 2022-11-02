import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsListComponent } from './events/events.list.component';

@NgModule({
    imports: [
    BrowserModule,
    NgbModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
