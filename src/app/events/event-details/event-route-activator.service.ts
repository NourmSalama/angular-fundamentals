import { Router, ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import { EventServices } from "../shared";
import { Injectable } from "@angular/core";

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
