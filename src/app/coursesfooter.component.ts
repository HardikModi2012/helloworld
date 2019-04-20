import { Component } from '@angular/core';

@Component({
    selector: 'footer', //<footer> //this name shall be used as title in export class/component
    templateUrl : './coursesfooter.component.html',
    styleUrls:['./coursesfooter.components.css']

})

export class CoursesFooterComponent
{ 
    title = 'Footer';
}