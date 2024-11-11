import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { InputTextModule } from "primeng/inputtext";
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: "app-input-codigos",
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    InputOtpModule,
    FormsModule
  ],
  templateUrl: "./input-codigos.component.html",
  styleUrl: "./input-codigos.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCodigosComponent,
      multi: true,
    },
    provideNgxMask(),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputCodigosComponent implements OnInit {

  @Input()
  form!: FormGroup;

  @Input()
  formControlName: string = "";

  @Input()
  quantidade: number = 0;

  @Input()
  label: string | undefined

  formBuilder = inject(FormBuilder);
  elementRef = inject(ElementRef);

  formInputs = this.formBuilder.group({});

  value = ''

  ngOnInit() {

  }




  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
