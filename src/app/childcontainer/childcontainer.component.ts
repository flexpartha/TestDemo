import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcontainer',
  templateUrl: './childcontainer.component.html',
  styleUrls: ['./childcontainer.component.css']
})
export class ChildcontainerComponent implements OnInit {

 //@Input() title = 'I\'m a nested component';
 @Input() 
 title:string;

 @Output() 
 notify:EventEmitter<string>=new EventEmitter<string>();
 constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.notify.emit("Click from nested component");
  }
}
