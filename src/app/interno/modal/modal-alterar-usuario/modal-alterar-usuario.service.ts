import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioDTO } from '../../../../core/dto/usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class ModalAlterarUsuarioService {

  constructor() { }

  formBuilder = inject(FormBuilder);

  gerarForm(usuario ? : UsuarioDTO) {
    return this.formBuilder.group({
      name: [usuario?.name, [Validators.required]],
      dateBirth: [usuario?.dateBirth ? new Date(usuario?.dateBirth) : undefined, [Validators.required]],
      cpf: [usuario?.cpf, [Validators.required]],
      email: [usuario?.email, [Validators.required, Validators.email]],
      cellphone: [usuario?.cellphone, [Validators.required]],
      password: [undefined, [Validators.required]],
    });
  }
}
