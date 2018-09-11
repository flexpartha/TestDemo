import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcontainer',
  templateUrl: './parentcontainer.component.html',
  styleUrls: ['./parentcontainer.component.css']
})
export class ParentcontainerComponent implements OnInit {

  childTitle:string="This text is passed to child";
  constructor() { }

  ngOnInit() {
  }

  onNotify(message:string):void
  {
    alert(message);
  }

}
