import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { CoursesComponent } from './courses.components';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesHeaderComponent } from './../courseheader.component';
import { CoursesListComponent } from './../courseslist.component';
import { CoursesAddComponent } from './../coursesadd.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
export const appRoutes: Routes = [
  {
    path: 'add', component: CoursesAddComponent
  },
  {
    path: 'list', component: CoursesListComponent
  },
  {
    path: 'header', component: CoursesHeaderComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'detail/:id', component: CourseDetailComponent
  },
  {
    path: 'courses', component: CoursesComponent
  },
  {
    path: 'lectures', component: LecturesComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'create-student', component: CreateStudentComponent
  },
  {
    path: 'create-event', component: CreateEventComponent
  },

  {
    path: 'dashboard/:id', component: EventDetailsComponent
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
