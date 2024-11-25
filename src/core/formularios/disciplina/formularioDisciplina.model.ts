import { FormBuilder, Validators } from '@angular/forms';
import { Formulario } from '../../dto/formulario.dto';


export const FormularioCadastroDisciplina: Formulario[] = [
  {
    linha: [
      {
        className: '',
        type: 'text',
        formControlName: 'name',
        placeholder: 'Nome',
      },
    ],
    className: 'w-full grid  gap-x-4',
  },
  {
    linha: [
      {
        className: '',
        type: 'text',
        formControlName: 'code',
        placeholder: 'Código',
      },
      {
        className: '',
        type: 'text',
        formControlName: 'ipCamera',
        placeholder: 'Ip da Camera',
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
