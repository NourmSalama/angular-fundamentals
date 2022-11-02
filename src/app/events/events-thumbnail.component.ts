import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="bg-light bg-gradient-light text-secondary p-4">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
      <span>Location: {{event.location.address}}</span>
      <span>&nbsp;</span>
      <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
    <button class="btn btn-primary p-2 mt-2" (click)="handleClickMe()">Click me!</button>
  </div> 
  `
})

export class EventsThumbnailComponent {
  @Input() event:any
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    console.log(this.event.name);
  }
}
