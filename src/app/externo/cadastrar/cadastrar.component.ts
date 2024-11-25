import { ProfessorService } from './../../../core/service/professor.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CampoComponent } from '../../../shared/formulario/campo/campo.component';
import { Router, RouterModule } from '@angular/router';
import { UtilService } from '../../../core/service/util.service';
import { CadastrarComponentService } from './cadastrar.service';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormularioCadastroAluno, FormularioCadastroProfessor } from '../../../core/formularios/cadastro-usuario/formularioCadastro.model';
import { AlunoDTO, ProfessorDTO, UsuarioDTO } from '../../../core/dto/usuario.dto';
import { AlunoService } from '../../../core/service/aluno.service';
import { GenericCardCategoriaIconeComponent } from "../../../shared/generic-card-categoria-icone/generic-card-categoria-icone.component";
import { NgxSpinnerService } from 'ngx-spinner';

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
  imports: [CommonModule, CampoComponent, RouterModule, ReactiveFormsModule, GenericCardCategoriaIconeComponent],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss'
})
export class CadastrarComponent {
  utilService= inject(UtilService)
  cadastrarComponentService = inject(CadastrarComponentService);
  professorService = inject(ProfessorService);
  alunoService = inject(AlunoService)
  router =inject(Router);
  spinner = inject(NgxSpinnerService)

  form = this.cadastrarComponentService.gerarForm()

  estruturaAluno = FormularioCadastroAluno

  estruturaProfessor = FormularioCadastroProfessor

  validarSenha: VerificacoesSenha = {
    verificarSenha: false,
    naoCoincidem: false,
    oitoCaracteres: false,
    letraMaiuscula: false,
    letraMinuscula: false,
    numero: false,
    caracterEspecial: false,
  };

  cards = [
    {
      nome: "ALUNO",
      descricao: "Estudante da instituição que acessa disciplinas.",
      icone: "ph-student",
      opcao: "ALUNO",
    },
    {
      nome: "PROFESSOR",
      descricao: "Educador responsável por ministrar disciplinas.",
      icone: "ph-chalkboard-teacher",
      opcao: "PROFESSOR",
    },
  ];

  alterarOpcao(novaOpcao: string){
    this.form.controls.tipoUsuario.setValue(novaOpcao)
  }

  constructor() {
    this.form.controls.tipoUsuario.valueChanges.subscribe(res => {
      if(res === 'ALUNO'){
        this.form.controls.registration.setValidators([Validators.required]);
        this.form.controls.course.setValidators([Validators.required]);
      }else{
        this.form.controls.identifier.setValidators([Validators.required]);
      }
    })

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
    this.spinner.show()
    const aluno : AlunoDTO = {
      name: this.form.value.name!,
      cpf: this.form.value.cpf!,
      email: this.form.value.email!,
      cellphone: this.form.value.cellphone!,
      dateBirth: this.form.value.dateBirth!,
      password: this.form.value.password!,
      course: this.form.value.course!,
      registration: this.form.value.registration!,
    }


    const professor : ProfessorDTO = {
      name: this.form.value.name!,
      cpf: this.form.value.cpf!,
      email: this.form.value.email!,
      cellphone: this.form.value.cellphone!,
      dateBirth: this.form.value.dateBirth!,
      password: this.form.value.password!,
      identifier: this.form.value.identifier!,
    }
    let request$;

    if(this.form.controls.tipoUsuario.value === 'PROFESSOR'){
      request$ = this.professorService.criar(professor);
    } else {
      request$ = this.alunoService.criar(aluno);
    }

      request$.subscribe(
        {
          next: () => {
            this.utilService.emitNotificacao('success', 'Usuário Cadastrado com sucesso');
            this.router.navigateByUrl('/login')
            this.spinner.hide()
          },
          error: (err) => {
            this.utilService.emitNotificacao('error',err?.error)
            this.spinner.hide()
          }
        }
      )

  }
}
