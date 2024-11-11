import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';

@Component({
  selector: 'app-input-color',
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputColorComponent,
      multi: true,
    },
  ],
})
export class InputColorComponent implements OnInit {
  @Input()
  formControlName: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  form!: FormGroup;

  @Input()
   label: string | undefined

  selectedColor: string = '#000000';

  constructor() {}

  ngOnInit(): void {
   this.selectedColor = this.form.get(this.formControlName)?.value ? this.form.get(this.formControlName)?.value : '#000000'
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  onColorInput(event: any) {
    this.selectedColor = event.target.value;
  }

  onColorChange(event: any) {
    this.selectedColor = event.target.value;
  }
}
