import { Directive, ElementRef, OnInit, Renderer2,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appPbetterDirective]'
})
export class PbetterDirectiveDirective implements OnInit {
  @Input() fcolor:string='transparent';
  @Input() scolor:string='red';
  @HostBinding('style.backgroundColor') bgc:string=this.fcolor;

  @HostListener("mouseenter") mymouseenter(E:Event): void {
    this.bgc=this.scolor;

  }

  @HostListener("mouseleave") mymouseleave(E:Event): void {
    this.bgc=this.fcolor
  }


  constructor(private elref:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.bgc=this.fcolor
    //this.renderer.setStyle(this.elref.nativeElement,'backgroundColor','red');
  }

}
