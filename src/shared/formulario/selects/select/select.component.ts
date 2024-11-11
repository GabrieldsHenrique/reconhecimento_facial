import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";
import {
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { InputSwitchModule } from "primeng/inputswitch";
import { AutoAdjusteWidthDirective } from "../../diretivas/auto-ajuste.directive";
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: "app-select",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    AutoAdjusteWidthDirective,
    FormsModule,
    InputSwitchModule,
    TooltipModule
  ],
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent {
  @Input()
  formControlName: string = "";

  @Input()
  placeholder: string = "";

  @Input()
  form!: FormGroup;

  @Input()
  options!: { value: string; label: string }[];

  @Input()
   label: string | undefined

  @Input()
  title!: string;

  @Input()
  mostrarToogle: boolean = false;

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
