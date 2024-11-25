import { FormBuilder, Validators } from '@angular/forms';
import { Formulario } from '../../dto/formulario.dto';

export const FormularioCadastroAluno: Formulario[] = [
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
        type: 'text',
        formControlName: 'cpf',
        placeholder: 'CPF',
        mask: '000.000.000-00'
      },
      {
        className: '',
        type: 'text',
        formControlName: 'registration',
        placeholder: 'Matrícula',
      },
    ],
    className: 'w-full grid grid-cols-3 gap-x-4',
  },
  {
    linha: [
      {
        className: '',
        type: 'date',
        formControlName: 'dateBirth',
        placeholder: 'Data de Nascimento',
      },
      {
        className: '',
        type: 'text',
        formControlName: 'cellphone',
        placeholder: 'Telefone',

        mask: '(00) 00000-0000',
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
        type: 'select',
        formControlName: 'course',
        placeholder: 'Curso',
        options: [
          { label: "Administração", value: "ADM" },
          { label: "Ciências Atmosféricas", value: "ATM" },
          { label: "Ciências Biológicas - Licenciatura", value: "BIO" },
          { label: "Ciência da Computação", value: "COM" },
          { label: "Engenharia de Computação", value: "ECO" },
          { label: "Engenharia de Controle e Automação", value: "ECA" },
          { label: "Engenharia de Energia", value: "ENE" },
          { label: "Engenharia Eletrônica", value: "ELE" },
          { label: "Engenharia Mecânica", value: "EME" },
          { label: "Engenharia Mecânica Aeronáutica", value: "EMA" },
          { label: "Engenharia de Materiais", value: "EMA" },
          { label: "Engenharia de Produção", value: "EPD" },
          { label: "Física - Bacharelado", value: "FIB" },
          { label: "Física - Licenciatura", value: "FIL" },
          { label: "Matemática - Bacharelado", value: "MAB" },
          { label: "Matemática - Licenciatura", value: "MAL" },
          { label: "Química - Bacharelado", value: "QUB" },
          { label: "Química - Licenciatura", value: "QUL" },
          { label: "Sistemas de Informação", value: "SIN" }
        ],
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

export const FormularioCadastroProfessor: Formulario[] = [
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
        type: 'text',
        formControlName: 'cpf',
        placeholder: 'CPF',
        mask: '000.000.000-00'
      },
    ],
    className: 'w-full grid grid-cols-2 gap-x-4',
  },
  {
    linha: [

      {
        className: '',
        type: 'date',
        formControlName: 'dateBirth',
        placeholder: 'Data de Nascimento',
      },
      {
        className: '',
        type: 'text',
        formControlName: 'identifier',
        placeholder: 'Identificador',
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

        mask: '(00) 00000-0000',
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


export const FormularioSimplesCadastro: Formulario[] = [
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
        placeholder: 'CPF',
        mask: '000.000.000-00'
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
        type: 'text',
        formControlName: 'email',
        placeholder: 'Email',
      },
      {
        className: '',
        type: 'password',
        formControlName: 'password',
        placeholder: 'Senha',
      },
    ],
    className: 'w-full grid grid-cols-2 gap-x-4',
  },
];
