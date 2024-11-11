import { FormBuilder, Validators } from '@angular/forms';
import { Formulario } from '../../dto/formulario.dto';

export const FormularioCadastro: Formulario[] = [
  {
    linha: [
      {
        className: '',
        type: 'text',
        formControlName: 'name',
        placeholder: 'Nome',
      },
      {
        className: '',
        type: 'date',
        formControlName: 'dateBirth',
        placeholder: 'Data de Nascimento',
      },
    ],
    className: 'w-full grid grid-cols-2 gap-x-4',
  },
  {
    linha: [
      {
        className: '',
        type: 'text',
        formControlName: 'cpf',
        placeholder: 'Documento',
        mask: '000.000.000-00'
      },
      {
        className: '',
        type: 'select',
        formControlName: 'tipoUsuario',
        placeholder: 'Tipo de Usuário',
        options: [
          { label: 'Aluno', value: 'ALUNO' },
          { label: 'Professor', value: 'PROFESSOR' },
        ],
      },
    ],
    className: 'w-full grid grid-cols-2 gap-x-4',
  },
  {
    linha: [
      {
        className: '',
        type: 'text',
        formControlName: 'email',
        placeholder: 'Email',
      },
      {
        className: '',
        type: 'text',
        formControlName: 'cellphone',
        placeholder: 'Telefone',

        mask: '(00) 0000-0000||(00) 00000-0000',
      },
    ],
    className: 'w-full grid grid-cols-2 gap-x-4',
  },
  {
    linha: [
      {
        className: '',
        type: 'password',
        formControlName: 'password',
        placeholder: 'Senha',
      },
      {
        className: '',
        type: 'password',
        formControlName: 'confirmPassword',
        placeholder: 'Confirmar Senha',
      },
    ],
    className: 'w-full grid grid-cols-2 gap-x-4',
  },
];
export const FormBuilderCadastro: FormBuilder = new FormBuilder();

export const FormGroupCadastro = FormBuilderCadastro.group({
  nome: ['', [Validators.required]],
  sobrenome: ['', [Validators.required]],
  // dataNascimento: ["", [Validators.required]],
  // cpf: ["", [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
  telefone: ['', [Validators.required]],
  senha: ['', [Validators.required]],
  confirmarSenha: ['', [Validators.required]],
});
