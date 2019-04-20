import { EventService } from './../event.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl,  Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  
  languages = ['ENglish' , 'Hindi' , 'Gujarati' ];
 


  constructor(private eventService:EventService, private router:Router ) { 
    //called first time before the ngOnInit()
  }

  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges()
   
  }

  private restrictedWords(control: FormControl ): {[key: string]: any}
  {
    return control.value.includes('foo') 
    ? {'restrictedWords': 'foo' }
    : null
  }
  saveEvent(event) {
    this.eventService.saveEvent(event)
    this.router.navigate(['/events'])
  }
  
  cancel(form) {
    this.router.navigate(['/events'])
  }
}
