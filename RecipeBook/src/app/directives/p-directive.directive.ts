import { Directive,ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPDirective]'
})
export class PDirectiveDirective implements OnInit {

  constructor(private elementr: ElementRef) { 
    

  }
  ngOnInit(): void {
    this.elementr.nativeElement.style.backgroundColor="green";
  }

}
