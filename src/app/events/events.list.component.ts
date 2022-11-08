import { Component, OnInit } from "@angular/core";
import { EventServices } from "./shared/event.services";

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail [event]="event"></event-thumbnail>
      </div>
    </div>

  </div>
  `
})

export class EventsListComponent implements OnInit {

  events!: any[];

  constructor(private eventServices: EventServices) {
  }

  ngOnInit() {
    this.events = this.eventServices.getEvents();
  }

}
