import { ElementRef, Renderer2 } from '@angular/core';
import { HoverBorderDirective } from './hover-border.directive';

describe('HoverBorderDirective', () => {
  let mockElementRef: ElementRef;
  let mockRenderer2: Renderer2;

  beforeEach(() => {
    mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    mockRenderer2 = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);
  });

  it('should create an instance', () => {
    const directive = new HoverBorderDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });

  it('should apply border on mouse enter', () => {
    const directive = new HoverBorderDirective(mockElementRef, mockRenderer2);
    directive.borderColor = '#FF5100';
    directive.onMouseEnter();
    expect(mockRenderer2.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'border',
      '2px solid #FF5100'
    );
    expect(mockRenderer2.setStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'transition',
      'border 0.3s'
    );
  });

  it('should remove border on mouse leave', () => {
    const directive = new HoverBorderDirective(mockElementRef, mockRenderer2);
    directive.onMouseLeave();
    expect(mockRenderer2.removeStyle).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'border'
    );
  });
});
