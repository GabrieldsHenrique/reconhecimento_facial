import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit {

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

  constructor() { }

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
