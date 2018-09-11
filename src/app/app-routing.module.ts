import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TrackByemployeeListComponent } from './track-byemployee-list/track-byemployee-list.component';

const routes:Routes=[
  {
    path: "Main",
    component:ListComponent
  },
  {
    path: "TOMHOPKIN",
    component:EmployeeComponent
  },
  {
    path: "SECTIONNGFOR",
    component:EmployeeListComponent
  },
  {
    path: "SECTIONTRACKBY",
    component:TrackByemployeeListComponent
  },
  {
    path: '',
    redirectTo: '/Main',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
