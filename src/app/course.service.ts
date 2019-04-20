import { MessageService } from './message.service';
import { COURSES } from './mock-course';
import { Course } from './course';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'http://localhost:59877/api/App/1';  // URL to web api

  constructor(private messageService: MessageService,
    private http: HttpClient) { }
// this creates a private field called messageservice for Messageservice class
  getCourses(): Observable<Course[]>
  {
    // this.messageService.add('CourseService: fetched courses');
    //return of(COURSES);
    return this.http.get<Course[]>(this.coursesUrl);
  }

  getCourse(id: number): Observable<Course>
  {
    this.messageService.add(`CourseService: fetched course id=${id}`);
    return of(COURSES.find(course => course.id === id));
  }
  
}

