import { Lecture } from './../lectures/lecture';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements OnInit {

  @Input() lecture : Lecture;
  constructor() { }

  ngOnInit() {
  }

}
