import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[autoAjusteWidth]',
  standalone: true,
})
export class AutoAdjusteWidthDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    this.ajustarWidth();
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.ajustarWidth(event);
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    this.ajustarWidth();
  }

  private ajustarWidth(event?: any) {
    const autocomplete = this.el.nativeElement.querySelector(
      '.p-autocomplete '
    );
    const dropdown = this.el.nativeElement.querySelector('.p-dropdown');

    if(autocomplete) {
      const informacoes = autocomplete.getBoundingClientRect();

      const overlay = this.document.querySelector('.p-overlay')

      if(overlay){
        this.renderer.setStyle(overlay, 'min-width', `${informacoes.width}px`);
        this.renderer.setStyle(overlay, 'width', `${informacoes.width}px`);
      }
 

      if(this.isButtonClicked(event)) {
        this.limparInput();
      }

    }

    if(dropdown) {
      const informacoes = dropdown.getBoundingClientRect();
      const overlay = this.document.querySelector('.p-overlay')

      if(overlay){
      this.renderer.setStyle(overlay, 'min-width', `${informacoes.width}px`);
      this.renderer.setStyle(overlay, 'width', `${informacoes.width}px`);
      }
    }
  }

  private isButtonClicked(event?: Event): boolean {
    const buttonElement = this.el.nativeElement.querySelector(
      '.p-autocomplete-dropdown'
    );

    if(event) {
      return buttonElement && buttonElement.contains(event.target);
    }

    return false;
  }

  private limparInput() {
    const inputElement = this.el.nativeElement.querySelector('input');
    if (inputElement) {
      this.renderer.setProperty(inputElement, 'value', '');
    }
  }
}
