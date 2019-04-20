
import { Component } from '@angular/core';


// This is called decorator
@Component({
    selector: 'header',
    template:"<b>{{title}}</b>",
    styles:[]
    
})

export class CoursesHeaderComponent
{
   title="header of  Courses ";

    
}