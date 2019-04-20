import { Observable , of } from 'rxjs';
import { Lecture } from './lectures/lecture';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class LectureService {
  private lectureUrl = 'http://localhost:59877/App/lectures/1';
  //property
  // lecture service is observable 
  // and whom this lecture data is required is observer
  constructor //thiss going to create private field for class lecservice
  (private http : HttpClient){}
  getLectures(): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(this.lectureUrl)
    

  }

  // getLectures(id: number): Observable<Lecture>
  // {
  //   this.lectureservice.add(`LectureService: fetched lecture id=${id}`);
  //   return of(LECTURES.find(lecture => lecture.id === id));
  // }
}
