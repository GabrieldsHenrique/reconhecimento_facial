import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioButtonComponent,
      multi: true
    }
  ]
})
export class RadioButtonComponent implements OnInit {

  @Input()
  options!: { value: any; label: string }[];

  @Input()
  formControlName:string ="";

  @Input()
  placeholder:string = "";

  @Input()
  form!: FormGroup;

  @Input()
   label: string | undefined

  @Input()
  title!: string;

  @Input()
  class!: string;

  ngOnInit(): void {


  }

  writeValue(value: string): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {
  }
}
