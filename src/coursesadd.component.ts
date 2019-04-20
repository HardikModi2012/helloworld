
import { Component } from '@angular/core';


// This is called decorator
@Component({
    selector: 'add',
    template:"<b>{{title}}</b>",
    styles:[]
    //templateUrl: './course.component.css'
    //styleUrls: ['./course.component.css']
})

export class CoursesAddComponent
{
   title="Add Courses ";

    
}