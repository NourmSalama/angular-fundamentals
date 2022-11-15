import { Router, ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import { Injectable } from "@angular/core";
import { EventServices } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {

  constructor(
    private eventService:EventServices,
    private router:Router
  ) {}

  canActivate(route:ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(route.params['id'])

    if (!eventExists) {
      return this.router.navigate(['/404'])
    }
    return eventExists
  }
}
