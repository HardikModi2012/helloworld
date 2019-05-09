import { VisitsComponent } from './visits/visits.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventRouteActivator } from './event-details/event.route.activator';
import { Error404Component } from './create-student/errors/404.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component'; 
import { CreateStudentComponent } from './create-student/create-student.component';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { CoursesComponent } from './courses.components';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesHeaderComponent } from './../courseheader.component';
import { CoursesListComponent } from './../courseslist.component';
import { CoursesAddComponent } from './../coursesadd.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventListResolver } from './event-list.resolver.service';

//routes are nothing but array of routes object
export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'eventlist', component: EventListComponent , resolve: {events: EventListResolver} },
  { path: 'courseadd', component: CoursesAddComponent },
  { path: 'courselist', component: CoursesListComponent },
  { path: 'header', component: CoursesHeaderComponent },  
  { path: 'detail/:id', component: CourseDetailComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'lectures', component: LecturesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'visits', component: VisitsComponent },
  { path: 'create-student', component: CreateStudentComponent },  
  // { //   path: 'dashboard/menu', component: CoursesMenuComponent // },
  { path: 'dashboard/new', component: CreateEventComponent,canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'dashboard/:id', component: EventDetailsComponent,  canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  {
    path: 'user' , loadChildren: './user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
