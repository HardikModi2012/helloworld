import { ActivatedRoute } from '@angular/router';
import { EventService } from './../event.service';
import { Component } from '@angular/core'

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',  
  styles: [`
    .container { padding-left:20pc; padding-right: 20px; },
    .event-image {height: 100px;}
  `]
})
export class EventDetailsComponent {
  event:any
  route: any;
  //declared as a properrty
  constructor(private eventService:EventService,
    route:ActivatedRoute) {
    
  }
  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.route.snapshot.para['id'])
  }
    
    
}