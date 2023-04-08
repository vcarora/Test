import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImg]'
})
export class ImgDirective {

  @Input()
  appImg : string | undefined

  constructor(private element : ElementRef) { }

  @HostListener('error')
  onError() {
    this.element.nativeElement.src = this.appImg || '../../assets/images/roposo.png';
  }


}
