import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";
import {
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { InputTextModule } from "primeng/inputtext";
import { UtilService } from "../../../../core/service/util.service";

@Component({
  selector: "app-input-cep",
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  templateUrl: "./input-cep.component.html",
  styleUrl: "./input-cep.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCepComponent,
      multi: true,
    },
    provideNgxMask(),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputCepComponent implements OnInit {
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

  utilService = inject(UtilService);

  constructor() {}

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit(): void {
  }
}
