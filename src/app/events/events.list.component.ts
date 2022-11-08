import { Component, OnInit } from "@angular/core";
import { EventServices } from "./shared/event.services";
import { ToastrService } from "../common/toastr.service";

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>

  </div>
  `
})

export class EventsListComponent implements OnInit {

  events!: any[];

  constructor(private eventServices: EventServices, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventServices.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
