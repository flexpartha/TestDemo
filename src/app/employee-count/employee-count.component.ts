import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  selectedRadioButtonValues:string="All";

  @Output()
  countRadioButtonSelectionchange:EventEmitter<string>=new EventEmitter<string>();
  @Input()
  all:number;
  @Input()
  male:number;
  @Input()
  female:number;
  constructor() { }

  ngOnInit() {
  }

  onRadioButtonselectionChange(){
    this.countRadioButtonSelectionchange.emit(this.selectedRadioButtonValues);
    console.log(this.selectedRadioButtonValues);
  }
}
