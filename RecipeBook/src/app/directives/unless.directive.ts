import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input()  set appUnless(condition:boolean){

        if(!condition)
        {
              this.vc.createEmbeddedView(this.tref);
        }
        else
        {
               this.vc.clear();
        }

  }

  constructor(private tref:TemplateRef<any>,private vc:ViewContainerRef) {


   }

}
