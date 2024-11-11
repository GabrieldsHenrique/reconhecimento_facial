import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [InputTextModule, CommonModule, ReactiveFormsModule, NgxMaskDirective, PasswordModule, NgxMaskPipe],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputPasswordComponent,
      multi: true,
    },
    provideNgxMask()
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputPasswordComponent {
  @Input()
  type: string = '';

  @Input()
  formControlName: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  form!: FormGroup;

  @Input()
   label: string | undefined

  @Input()
  options!: any[] | undefined;

  @Input()
  fileAccept: string = '';

  constructor() {
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {
  }
}
