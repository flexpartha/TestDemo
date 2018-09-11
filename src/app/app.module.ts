import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule} from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { TrackByemployeeListComponent } from './track-byemployee-list/track-byemployee-list.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { SimpleComponent } from './others/simple/simple.component';
import { EmployeeDataService } from './employee-data.service';
import { ParentcontainerComponent } from './parentcontainer/parentcontainer.component';
import { ChildcontainerComponent } from './childcontainer/childcontainer.component';
import { HoverDirective } from './customdirective/hover.directive';
import { EmployeeTitlePipe } from './employee/employee-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ListComponent,
    TrackByemployeeListComponent,
    EmployeeCountComponent,
    SimpleComponent,
    ParentcontainerComponent,
    ChildcontainerComponent,
    HoverDirective,
    EmployeeTitlePipe
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
