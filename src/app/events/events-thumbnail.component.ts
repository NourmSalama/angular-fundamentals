import { Component, Input } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <div class="bg-light bg-gradient-light text-secondary p-4">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div [ngSwitch]="event?.time">Time: {{event.time}}
        <span *ngSwitch="'8:00 am'">(Early start)</span>
        <span *ngSwitch="'10:00 am'">(Late start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
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
}
