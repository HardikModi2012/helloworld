import { StudentService } from './../create-student/student.service';
import { Student } from './../course-detail/models/student.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: Student[];
  @Input() student: Student;
  studentToDisplay: Student;
  constructor(private _studentservice: StudentService) { }

  ngOnInit() {
  this.students= this._studentservice.getStudents();
  this.studentToDisplay= this.students[0];

  }
  nextStudent(): void
  {

  }
}
