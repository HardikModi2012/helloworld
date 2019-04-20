import { CourseService } from './../course.service';
import { Course } from './../course';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  
  @Input() course: Course;

  constructor(
    private route:ActivatedRoute,
    private courseService: CourseService,
    private location:Location,
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
    .subscribe(course => this.course = course)
  }

  goBack(): void
  {
    this.location.back();
  }

}
