import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { InputSwitchModule } from "primeng/inputswitch";

@Component({
  selector: "app-input-numero",
  standalone: true,
  imports: [InputNumberModule, InputSwitchModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./input-numero.component.html",
  styleUrl: "./input-numero.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputNumeroComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,

})
export class InputNumeroComponent implements OnInit  {
  @Input()
  formControlName: string = "";

  @Input()
  mostrarToogle: boolean = false;

  @Input()
  prefix: string | undefined

  @Input()
  suffix: string | undefined

  @Input()
  placeholder: string = "";

  @Input()
  form!: FormGroup;

  @Input()
   label: string | undefined

  @Input()
  max: number | undefined;

  @Input()
  min: number | undefined

  @Input()
  minCasaDecimais: number | undefined;

  @Input()
  maxCasaDecimais: number | undefined;

  inicialToogle = false

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

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

}
