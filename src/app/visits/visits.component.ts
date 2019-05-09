import { VisitsService } from './../visits.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {
visits:any[]

  constructor(private visitsService: VisitsService) { }

  ngOnInit() {
    this.getVisit();
  }

  getVisit(): void {
    alert('getVisit');
    this.visitsService.getVisit()
      .subscribe(visits => this.visits = visits);
}

}
