import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iemployee } from '../employees/iemployee';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-track-byemployee-list',
  templateUrl: './track-byemployee-list.component.html',
  styleUrls: ['./track-byemployee-list.component.css']
})
export class TrackByemployeeListComponent implements OnInit {

  Header:string='THE TRACK BY EMPLOYEE LIST';
  employees:Iemployee[];
  selectedEmployeesCountRadioButton:string="All";
  constructor(private router:Router,private _empService:EmployeeDataService) { }

  getAllemployees():void
  {
    this.employees=[
      {code:'emp101',name:'Tom',gender:'Male',annualSalary:'550000',dateofbirth:'6/25/1988'},
      {code:'emp102',name:'Alex',gender:'Male',annualSalary:'570000',dateofbirth:'9/6/1976'},
      {code:'emp103',name:'Tom',gender:'Male',annualSalary:'950000',dateofbirth:'12/8/1998'},
      {code:'emp103',name:'ATom',gender:'Male',annualSalary:'720000',dateofbirth:'5/8/1998'},
      {code:'emp104',name:'Tom',gender:'FeMale',annualSalary:'1050000',dateofbirth:'7/6/1978'},
      {code:'emp105',name:'JAlex',gender:'FeMale',annualSalary:'70000',dateofbirth:'7/19/1974'},
      {code:'emp106',name:'JaTom',gender:'FeMale',annualSalary:'150000',dateofbirth:'1/1/1968'},
      {code:'emp107',name:'PriToma',gender:'FeMale',annualSalary:'1150000',dateofbirth:'7/12/1978'},
      {code:'emp108',name:'PriTomi',gender:'FeMale',annualSalary:'450000',dateofbirth:'7/12/1978'},
      {code:'emp109',name:'PriTomiyam',gender:'FeMale',annualSalary:'150000',dateofbirth:'7/12/1978'}
    ];
  }

  trackByEmpcode(index:number,employee:any):string
  {
    return employee.code;
  }
  ngOnInit() {
    this.employees=this._empService.getEmployees();
  }
  gotoMain(){
    let link = ['/Main'];
    this.router.navigate(link);
  }

  getTotalEmployeesCount():number
  {
    return this.employees.length;
  }
  getTotalMaleEmployeesCount():number
  {
    return this.employees.filter(e=>e.gender==="Male").length;
  }
  getTotalFeMaleEmployeesCount():number
  {
    return this.employees.filter(e=>e.gender==="FeMale").length;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue):void
  {
    this.selectedEmployeesCountRadioButton=selectedRadioButtonValue
  }
}
