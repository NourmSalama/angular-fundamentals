import { Component } from "@angular/core";
import { EventServices } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./event-details.component.html",
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
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
