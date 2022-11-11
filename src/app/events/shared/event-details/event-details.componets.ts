import { Component } from "@angular/core";
import { EventServices } from "../event.services";

@Component({
  templateUrl: "./event-details.component.html",
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent {

  event: any

  constructor(private eventService: EventServices) {

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }

}
