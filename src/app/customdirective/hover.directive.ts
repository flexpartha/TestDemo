import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() hoverColor:string;
  @Input() hoverLeaveColor:string;
  constructor(private el:ElementRef) {
    //el.nativeElement.style.backgroundColor="red";
    //el.nativeElement.style.color="white";
   }

  @HostListener('mouseenter') onMouseEnter(){
    this.hightlite(this.hoverColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hightlite(this.hoverLeaveColor);
  }

  private hightlite(color){
    this.el.nativeElement.style.backgroundColor=color;
    //this.el.nativeElement.style.color=color;
  }
}
