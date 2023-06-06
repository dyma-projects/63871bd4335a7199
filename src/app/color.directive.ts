import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el : ElementRef<any>) { }
  ngOnInit(){
   
  }
  @HostListener('window:keyup', ['$event']) windowKey($event) {
    if($event.key === "ArrowUp"){
      this.el.nativeElement.style.color = 'red'
    }
    if($event.key === "ArrowDown"){
      this.el.nativeElement.style.color = 'green'
    }
    if($event.key === "ArrowRight"){
      this.el.nativeElement.style.color = 'yellow'
    }
    if($event.key === "ArrowLeft"){
      this.el.nativeElement.style.color = 'blue'
    }
  }

}
