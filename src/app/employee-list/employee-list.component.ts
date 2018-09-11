import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iemployee } from '../employees/iemployee';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})


export class EmployeeListComponent implements OnInit {
  
  Header:string="Section For *NG-FOR";
   employees:Iemployee[];
  constructor(private router:Router,private _empservice2:EmployeeDataService) {}

  ngOnInit() {
    this.employees=this._empservice2.getEmployees();
  }
  gotoMain(){
    let link = ['/Main'];
    this.router.navigate(link);
  }

}
