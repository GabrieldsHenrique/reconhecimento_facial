import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { CheckboxComponent } from '../checkbox/checkbox/checkbox.component';
import { InputCepComponent } from '../inputs/input-cep/input-cep.component';
import { InputCodigosComponent } from '../inputs/input-codigos/input-codigos.component';
import { InputDateComponent } from '../inputs/input-date/input-date.component';
import { InputNumeroComponent } from '../inputs/input-numero/input-numero.component';
import { InputPasswordComponent } from '../inputs/input-password/input-password.component';
import { InputTextComponent } from '../inputs/input-text/input-text.component';
import { SelectEstadoComponent } from '../selects/select-estado/select-estado.component';
import { SelectComponent } from '../selects/select/select.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { InputColorComponent } from '../inputs/input-color/input-color.component';
import { InputTextareaComponent } from '../inputs/input-textarea/input-textarea.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
@Component({
  selector: 'app-campo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    SelectComponent,
    InputDateComponent,
    InputPasswordComponent,
    ToggleComponent,
    SelectEstadoComponent,
    CheckboxComponent,
    InputCepComponent,
    InputCodigosComponent,
    InputNumeroComponent,
    InputColorComponent,
    InputTextareaComponent,
    RadioButtonComponent,


  ],
  templateUrl: './campo.component.html',
  styleUrl: './campo.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CampoComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CampoComponent {
  @Input()
  type: string = '';

  @Input()
  formControlName: string = '';

  @Input()
  mask: string | undefined = '';

  @Input()
  placeholder: string = '';

  @Input()
  form!: FormGroup;

  @Input()
  label: string | undefined = '';

  @Input()
  options!: any[] | undefined;

  @Input()
  max: number | undefined;

  @Input()
  min: number | undefined;

  @Input()
  rows: number | undefined;

  @Input()
  prefix: string | undefined;

  @Input()
  suffix: string | undefined;

  @Input()
  mostrarToogle: boolean = false;

  @Input()
  fileAccept: string = '';

  @Input()
  quantidadeCodigos: number | undefined;

  @Input()
  minCasaDecimais: number | undefined;

  @Input()
  maxCasaDecimais: number | undefined;

  @Input()
  accept: string[] | undefined;
  @Input()
  class: string = '';

  constructor() {}

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {}
}
