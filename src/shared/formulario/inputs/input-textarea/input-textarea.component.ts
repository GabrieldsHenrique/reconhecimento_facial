import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [    InputTextareaModule,
    InputSwitchModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTextareaComponent,
      multi: true,
    },
    provideNgxMask(),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputTextareaComponent {
  @Input()
  type: string = "";

  @Input()
  mostrarToogle: boolean = false;

  @Input()
  formControlName: string = "";

  @Input()
  rows: number | undefined;

  @Input()
  placeholder: string = "";

  @Input()
  form!: FormGroup;

  @Input()
   label: string | undefined

  inicialToogle: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.mostrarToogle) {
      if (
        this.form.get(this.formControlName)?.value &&
        this.form.get(this.formControlName)?.value != ""
      ) {
        this.inicialToogle = true;
        this.alterarToogle(true);
      } else {
        this.inicialToogle = false;
        this.alterarToogle(false);
      }
    }

    console.log(this.rows)
  }

  alterarToogle(status: boolean) {
    if (status) {
      this.form.get(this.formControlName)?.enable();
    } else {
      this.form.get(this.formControlName)?.setValue(null);
      this.form.get(this.formControlName)?.disable();
    }
  }

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
