import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './../event.service';
import { Component } from '@angular/core';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',  
  styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .event-image {height: 100px;}
  `]
})
export class EventDetailsComponent {
  event:any
  addMode: boolean
  filterBy: string = 'all' ;
  
  //declared as a properrty
  constructor(private eventService:EventService,
    private route:ActivatedRoute,
    private router: Router) {
    
  }
  ngOnInit() {
    this.event = this.eventService.getEvent
     (+this.route.snapshot.params['id'])
     //this.route.snapshot is used to get the parameter
     //+ is used to convert javascript prameter to numeric id
  }
    
  addSession() 
  {
    this.addMode = true;
  }

  onBack(): void
  {
    this.router.navigate(['/dashboard']);
  }
}