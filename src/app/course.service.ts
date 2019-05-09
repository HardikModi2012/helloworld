import { Course } from './course';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //we are creating private variable here
  private courseUrl = 'http://localhost:59877/App/courses/1';  // URL to web api

  constructor(private http: HttpClient)  { }
  //http is parameter which we set as a paramter to the requsted service
  getCourses(): Observable<Course[]>
  {
    ////'http://localhost:59877/api/app/1'
    return this.http.get<Course[]>(this.courseUrl);
  }

//   getCourse(id: number): Observable<Course>
//   {
//     this.messageService.add(`CourseService: fetched course id=${id}`);
//     return of(COURSES.find(course => course.id === id));
//   }
  
 }
  
