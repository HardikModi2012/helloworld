import { LectureService } from './../lecture.service';
import { Component, OnInit } from '@angular/core';
import { Lecture } from './lecture';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  
  lectures : Lecture[];

//LectureService is injection site
  constructor(private lectureService: LectureService) { }

  ngOnInit() {
    this.getLectures();
  }




//observables are also called subscribe

  getLectures(): void{
    this.lectureService.getLectures()
    .subscribe(lectures => this.lectures = lectures.slice(1, 5)) ;
  }
  //lectures are callback function to the parameter
   
}
 