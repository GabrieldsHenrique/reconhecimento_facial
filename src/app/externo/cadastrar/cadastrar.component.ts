import { ProfessorService } from './../../../core/service/professor.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CampoComponent } from '../../../shared/formulario/campo/campo.component';
import { Router, RouterModule } from '@angular/router';
import { UtilService } from '../../../core/service/util.service';
import { CadastrarComponentService } from './cadastrar.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioCadastro } from '../../../core/formularios/cadastro-usuario/formularioCadastro.model';
import { UsuarioDTO } from '../../../core/dto/usuario.dto';
import { AlunoService } from '../../../core/service/aluno.service';

interface VerificacoesSenha {
  [key: string]: boolean;
  verificarSenha: boolean;
  naoCoincidem: boolean;
  oitoCaracteres: boolean;
  letraMaiuscula: boolean;
  letraMinuscula: boolean;
  numero: boolean;
  caracterEspecial: boolean;
}

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [CommonModule, CampoComponent, RouterModule, ReactiveFormsModule ],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})
export class CadastrarComponent {
  utilService= inject(UtilService)
  cadastrarComponentService = inject(CadastrarComponentService);
  professorService = inject(ProfessorService);
  alunoService = inject(AlunoService)
  router =inject(Router)

  form = this.cadastrarComponentService.gerarForm()

  estrutura = FormularioCadastro

  validarSenha: VerificacoesSenha = {
    verificarSenha: false,
    naoCoincidem: false,
    oitoCaracteres: false,
    letraMaiuscula: false,
    letraMinuscula: false,
    numero: false,
    caracterEspecial: false,
  };

  constructor() {
    this.form.controls.password.valueChanges.subscribe((response) => {
      if (response && response.length > 0) {
        this.validarSenha.verificarSenha = true;
        this.validarSenha.oitoCaracteres = response.length > 8 ? true : false;
        this.validarSenha.caracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(
          response
        );
        this.validarSenha.letraMaiuscula = /[A-Z]/.test(response);
        this.validarSenha.letraMinuscula = /[a-z]/.test(response);
        this.validarSenha.numero = /\d/.test(response);
        this.validarSenha.naoCoincidem =
          response === this.form.controls.confirmPassword.value ? true : false;
      } else {
        this.validarSenha.verificarSenha = false;
      }

      this.validaForm();
    });

    this.form.controls.confirmPassword.valueChanges.subscribe((response) => {
      this.validarSenha.naoCoincidem =
        response === this.form.controls.password.value ? true : false;
      this.validaForm();
    });

  }

  validaForm() {
    let validaForm = true;
    Object.keys(this.validarSenha).forEach((chave) => {
      if (!this.validarSenha[chave]) {
        validaForm = false;
      }
    });

    if (!validaForm) {
      this.form.controls.password.setErrors({ invalido: false });
      this.form.controls.confirmPassword.setErrors({ invalido: false });
    }
    if (validaForm) {
      this.form.controls.password.setErrors(null);
      this.form.controls.confirmPassword.setErrors(null);
    }
  }


  cadastrar(){
    const usuario : UsuarioDTO = {
      name: this.form.value.name!,
      cpf: this.form.value.cpf!,
      email: this.form.value.email!,
      cellphone: this.form.value.cellphone!,
      dateBirth: this.form.value.dateBirth!,
      password: this.form.value.password!,
    }
    let request$;

    if(this.form.controls.tipoUsuario.value === 'PROFESSOR'){
      request$ = this.professorService.criar(usuario);
    } else {
      request$ = this.alunoService.criar(usuario);
    }

      request$.subscribe(
        {
          next: () => {
            this.utilService.emitNotificacao('success', 'Usuário Cadastrado com sucesso');
            this.router.navigateByUrl('/login')
          },
          error: (err) => {
            this.utilService.emitNotificacao('error',err?.error)
          }
        }
      )

  }
}
