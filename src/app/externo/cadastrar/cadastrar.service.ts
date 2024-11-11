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
      nome: ["", [Validators.required]],
      dataNascimento: ["", [Validators.required]],
      // cpf: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      telefone: ["", [Validators.required]],
      senha: ["", [Validators.required]],
      confirmarSenha: ["", [Validators.required]],
    });
  }
}
