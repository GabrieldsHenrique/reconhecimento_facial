import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";

@Component({
  selector: "app-select-estado",
  templateUrl: "./select-estado.component.html",
  styleUrls: ["./select-estado.component.scss"],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectEstadoComponent,
      multi: true,
    },
  ],
})
export class SelectEstadoComponent implements OnInit, ControlValueAccessor {
  selected = "";

  estadoList: { label: string; value: string }[] = [];

  @Input()
  formControlName: string = "";

  @Input()
  placeholder: string = "";

  @Input()
  form!: FormGroup;

  constructor() {}

  writeValue(value: string): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {
    this.estadoList = [
      { label: "AC", value: "AC" },
      { label: "AL", value: "AL" },
      { label: "AP", value: "AP" },
      { label: "AM", value: "AM" },
      { label: "BA", value: "BA" },
      { label: "CE", value: "CE" },
      { label: "DF", value: "DF" },
      { label: "ES", value: "ES" },
      { label: "GO", value: "GO" },
      { label: "MA", value: "MA" },
      { label: "MT", value: "MT" },
      { label: "MS", value: "MS" },
      { label: "MG", value: "MG" },
      { label: "PA", value: "PA" },
      { label: "PB", value: "PB" },
      { label: "PR", value: "PR" },
      { label: "PE", value: "PE" },
      { label: "PI", value: "PI" },
      { label: "RJ", value: "RJ" },
      { label: "RN", value: "RN" },
      { label: "RS", value: "RS" },
      { label: "RO", value: "RO" },
      { label: "RR", value: "RR" },
      { label: "SC", value: "SC" },
      { label: "SP", value: "SP" },
      { label: "SE", value: "SE" },
      { label: "TO", value: "TO" },
    ];
  }
}
