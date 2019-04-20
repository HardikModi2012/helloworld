import { appRoutes } from './app-routing.module';
import { StudentService } from './create-student/student.service';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { CoursesHeaderComponent } from './../courseheader.component';
import { CoursesListComponent } from './../courseslist.component';
import { CoursesFooterComponent } from './coursesfooter.component';
import { CoursesMenuComponent } from './coursesmenu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.components';
import { CoursesAddComponent } from 'src/coursesadd.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureDetailComponent } from './lecture-detail/lecture-detail.component';
import { HomeComponent } from './home/home.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DisplayStudentComponent } from './create-student/display-student.component';
import { LoginComponent } from './login/login.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventService } from './event.service';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesMenuComponent,
     CoursesFooterComponent,
    CoursesAddComponent,
    CoursesListComponent,
    CoursesHeaderComponent,
    CourseDetailComponent,
    DashboardComponent,
    LecturesComponent,
    LectureDetailComponent,
    HomeComponent,
    CreateStudentComponent,
    ConfirmEqualValidatorDirective,
    SelectRequiredValidatorDirective,
    ListStudentComponent,
    DisplayStudentComponent,
    LoginComponent,
    CreateEventComponent,
    EventDetailsComponent    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    StudentService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }