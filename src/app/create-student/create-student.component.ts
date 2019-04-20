import { StudentService } from './student.service';
import { Student } from './../course-detail/models/student.model';
import { Department } from '../course-detail/models/departments.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  previewPhoto = false;
  student: Student = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null

  }
  departments: Department[] = [
    { id: 1, name: 'help desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'payroll' }

  ];

  constructor( private _studentservice: StudentService,
    private _router: Router) { }

  togglephotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
  }

  saveStudent(): void {
    this._studentservice.save(this.student);
    this._router.navigate(['list']);
  }
}
