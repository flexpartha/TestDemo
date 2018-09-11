import { Injectable } from '@angular/core';
import { Iemployee } from './employees/iemployee';

@Injectable()
export class EmployeeDataService {

  getEmployees():Iemployee[]{
    return[
      {code:'emp101',name:'Tom',gender:'Male',annualSalary:'550000',dateofbirth:'6/25/1988'},
      {code:'emp102',name:'Alex',gender:'Male',annualSalary:'570000',dateofbirth:'9/6/1976'},
      {code:'emp103',name:'Tom',gender:'FeMale',annualSalary:'950000',dateofbirth:'12/8/1998'},
      {code:'emp104',name:'Tom',gender:'FeMale',annualSalary:'1050000',dateofbirth:'7/6/1978'}
    ];
  }
  constructor() { }

}
