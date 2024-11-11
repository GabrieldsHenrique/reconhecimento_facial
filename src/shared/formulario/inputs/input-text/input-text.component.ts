import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import {
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-input-text",
  standalone: true,
  imports: [
    InputTextModule,
    InputSwitchModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
  ],
  templateUrl: "./input-text.component.html",
  styleUrl: "./input-text.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTextComponent,
      multi: true,
    },
    provideNgxMask(),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputTextComponent implements OnInit {
  @Input()
  type: string = "";

  @Input()
  mostrarToogle: boolean = false;

  @Input()
  formControlName: string = "";

  @Input()
  mask: string | undefined = "";

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
