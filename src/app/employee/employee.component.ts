import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {animate} from '@angular/animations';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  PageHeader:string = 'Employee Details';
  firstname="Tom";
  lastname="Hopkings";
  gender="Male";
  age=70;
  showDetails:boolean=false;

  toggleDetails():void
  {
    this.showDetails=!this.showDetails;
  }

  getFullname():string
  {
    return this.firstname + " "+this.lastname;
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoMain(){
    let link = ['/Main'];
    this.router.navigate(link);
  }
}
