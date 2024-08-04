import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[swarmTooltip]',
  standalone: true,
})
export class TooltipDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() tooltipTemplate: TemplateRef<any> | undefined;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private viewRefContainer: ViewContainerRef
  ) {}

  createTooltip() {
    if (!this.tooltipTemplate) {
      return;
    }

    const tooltip = this.renderer.createElement('div');
    this.renderer.addClass(tooltip, 'customTooltip');
    this.renderer.setStyle(tooltip, 'position', 'absolute');
    const viewRef = this.viewRefContainer.createEmbeddedView(
      this.tooltipTemplate
    );
    viewRef.detectChanges();
    const tooltipContent = viewRef.rootNodes[0];
    this.renderer.appendChild(tooltip, tooltipContent);
    this.renderer.appendChild(this.elRef.nativeElement, tooltip);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.createTooltip();
  }

  @HostListener('mouseout')
  onMouseOut() {
    setTimeout(() => {
      const tooltip = this.elRef.nativeElement.querySelector('.customTooltip');
      if (tooltip !== null) {
        this.renderer.removeChild(this.elRef.nativeElement, tooltip);
      }
    }, 300);
  }
}
