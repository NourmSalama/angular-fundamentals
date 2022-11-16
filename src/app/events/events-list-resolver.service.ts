import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from "rxjs";
import { EventServices } from "./shared";


@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(private eventServices: EventServices) {
  }

  resolve() {
    return this.eventServices.getEvents().pipe(map(events => events));
  }

}
