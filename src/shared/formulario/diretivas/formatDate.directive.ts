import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formatDate]',
  standalone: true
})
export class FormatDateDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputValue = this.el.nativeElement.querySelector('.p-inputtext');

    const value = inputValue.value.replaceAll("[^0-9]", "");

    if (value.length === 2 || value.length === 5) {
      inputValue.value = value + '/';
    }
  }
}
