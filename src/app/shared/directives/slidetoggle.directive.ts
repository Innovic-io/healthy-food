import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSlideToggle]'
})
export class SlideToggleDirective {

  constructor(private elementRef: ElementRef) {}

  show(): void {
    console.log(this.elementRef);
    jQuery(this.elementRef).slideToggle();
  }
}
