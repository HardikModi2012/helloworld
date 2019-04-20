
import { Component } from '@angular/core';


// This is called decorator
@Component({
    selector: 'list',
    template:"<b>{{title}}</b>",
    styles:[]  
    
})

export class CoursesListComponent
{
   title="list of  Courses ";

    // constructor()
    // {
    //     let service = new CoursesService();
    //     this.courses = service.getCourses();
    // }

    //logic for calling http services
}