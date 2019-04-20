import { Student } from './../course-detail/models/student.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService{
    private listStudents: Student[]=[ 
        {
          id: 1,
          name: 'mark',
          gender: 'male',
          contactPreference: 'Email',
          email: 'abc@gmail.com',
          phoneNumber: 123456,
          dateOfBirth: new Date('10/12/2020'),
          department: 'IT',
          isActive: true,
          photoPath: 'assets/img/mark.png'
        },
        {
          id: 2,
          name: 'jack',
          gender: 'male',
          contactPreference: 'Email',
          email: 'jack@gmail.com',
          phoneNumber: 789456,
          dateOfBirth: new Date('25/12/2020'),
          department: 'IT',
          isActive: true,
          photoPath: 'assets/img/mjack.png'
        }];

        getStudents(): Student[] { 
            return this.listStudents;
        }
        save(student: Student)
        {
          this.listStudents.push(student);
        }
}
