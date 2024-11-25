import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CadastrarComponentService {

  constructor() { }

  formBuilder = inject(FormBuilder);

  gerarForm() {
    return this.formBuilder.group({
      name: ["", [Validators.required]],
      dateBirth: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      tipoUsuario : ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cellphone: ["", [Validators.required]],
      course: [""],
      registration: [""],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
      identifier :[""],
    });
  }
}
