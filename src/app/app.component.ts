import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name="PARTHA";
  private userText:string="PARTHA CHAKRABORTY";

  classToApply:string='boldClass italicsClass'
}
