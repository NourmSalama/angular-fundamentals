import { Component } from "@angular/core";
import { EventServices } from "../event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.css"]
})

export class EventDetailsComponent {

  event: any

  constructor(
    private eventService: EventServices,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
