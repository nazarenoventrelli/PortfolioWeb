import { Directive, ElementRef } from '@angular/core';
import { NgZoom } from 'ng-zoom';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef, private ngz: NgZoom) {
    this.ngz.listen(this.el);
  }

}
