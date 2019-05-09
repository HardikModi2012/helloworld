import { Component, OnInit } from '@angular/core'
import { EventService } from '../event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
    td a { color: #df691a }
  `]
})
export class EventListComponent implements OnInit {
  events:any

  constructor(private eventService: EventService,
    private route:ActivatedRoute) { }

    onRatingClicked(message: string)
    {
//      this.pageTitle
    }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

}
