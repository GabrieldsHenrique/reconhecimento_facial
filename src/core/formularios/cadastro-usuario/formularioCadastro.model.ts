import { FormBuilder, Validators } from "@angular/forms";
import { Formulario } from "../../dto/formulario.dto";

export const FormularioCadastro: Formulario[] = [
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "nome",
        placeholder: "Nome",

      },
      {
        className: "",
        type: "date",
        formControlName: "dataNascimento",
        placeholder: "Data de Nascimento",

      },
    ],
    className: "w-full grid grid-cols-2 gap-x-4",
  },
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "email",
        placeholder: "Email",

      },
      {
        className: "",
        type: "text",
        formControlName: "telefone",
        placeholder: "Telefone",

        mask: "(00) 0000-0000||(00) 00000-0000",
      },
    ],
    className: "w-full grid grid-cols-2 gap-x-4",
  },
  {
    linha: [
      {
        className: "",
        type: "password",
        formControlName: "senha",
        placeholder: "Senha",

      },
      {
        className: "",
        type: "password",
        formControlName: "confirmarSenha",
        placeholder: "Confirmar Senha",

      },
    ],
    className: "w-full grid grid-cols-2 gap-x-4",
  },
];
export const FormBuilderCadastro: FormBuilder = new FormBuilder();

export const FormGroupCadastro = FormBuilderCadastro.group({
  nome: ["", [Validators.required]],
  sobrenome: ["", [Validators.required]],
  // dataNascimento: ["", [Validators.required]],
  // cpf: ["", [Validators.required]],
  email: ["", [Validators.required, Validators.email]],
  telefone: ["", [Validators.required]],
  senha: ["", [Validators.required]],
  confirmarSenha: ["", [Validators.required]],
});
