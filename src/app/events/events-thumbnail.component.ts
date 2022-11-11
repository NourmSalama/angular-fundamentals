import { Component, Input } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <div class="bg-light bg-gradient-light text-secondary p-4">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
     <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early)</span>
        <span *ngSwitchCase="'10:00 am'">(Late)</span>
        <span *ngSwitchDefault>(Normal)</span>
      </div>
      <div>Price: \${{event.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        <span>Online URL: {{event?.onlineUrl}}</span>
      </div>
    </div>
  </div>
  `,
  styles: [`

    .green {
      color: #003300 !important;
    }

    .red {
      color: #990000 !important;
    }

    .blue {
      color: #000099 !important;
    }

    .bold {
      font-weight: bold;
    }

    .thumbnail {
      min-height: 210px;
    }

    .pad-left {
      margin-left: 10px;
    }

    `]
})

export class EventsThumbnailComponent {

  @Input() event:any

  getStartTimeClass() {

    const isEarlyStart = this.event && this.event.time === '8:00 am'
    const isLateStart = this.event && this.event.time === '10:00 am'
    const isNormalStart = this.event && this.event.time === '9:00 am'

    return {
      green: isEarlyStart,
      bold: isEarlyStart,
      red: isLateStart,
      blue: isNormalStart,
    }

  }
}
