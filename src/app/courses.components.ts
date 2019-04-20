import { CourseService } from './course.service';
import { Course } from './course';
import { Component, OnInit } from '@angular/core';



// This is called decorator
@Component({
    selector: 'courses',
     templateUrl: './courses.component.html',
     styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

    courses : Course[];
    

    constructor(private courseService: CourseService) { }

    ngOnInit() {
        this.getCourses();
    }

       getCourses(): void {
        this.courseService.getCourses()
          .subscribe(dbCourses => this.courses = dbCourses.slice(1,5));
    }




}