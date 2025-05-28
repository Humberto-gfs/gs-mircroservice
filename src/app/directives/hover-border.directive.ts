import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]',
  standalone: true
})
export class HoverBorderDirective {
  @Input('appHoverBorder') borderColor: string = '#FF5100';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.borderColor}`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'border');
  }
}
