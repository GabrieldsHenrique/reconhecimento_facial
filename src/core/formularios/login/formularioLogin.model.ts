import { FormBuilder, Validators } from "@angular/forms";
import { Formulario } from "../../dto/formulario.dto";



export const FormularioLoginSimples: Formulario[] = [
  {
    linha: [
      {
        className: "",
        type: "text",
        formControlName: "email",
        placeholder: "E-mail",

      },
    ],
    className: "w-full",
  },
  {
    linha: [
      {
        className: "",
        type: "password",
        formControlName: "password",
        placeholder: "Senha",

      },
    ],
    className: "w-full",
  },
]
