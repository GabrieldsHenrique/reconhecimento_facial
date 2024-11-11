import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputSwitchModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ToggleComponent,
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})

export class ToggleComponent implements OnInit {
  @Input()
  formControlName: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  form!: FormGroup;

  @Input()
   label: string | undefined

  constructor() { }

  writeValue(value: string): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnInit() {
  }

}
