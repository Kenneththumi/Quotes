import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 * Add the template content to the DOM when the condition is true.
 */
@Directive({
  selector: '[appHighestUpvote]'
})
export class HighestUpvoteDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { }

  @Input() set appHighestUpvote(condition:boolean){
      if(condition){
           this.viewContainer.createEmbeddedView(this.templateRef);
      }else{
          this.viewContainer.clear();
      }

  }

}
