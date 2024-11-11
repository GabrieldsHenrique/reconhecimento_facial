export interface Formulario {
  linha: CampoLinhaFormulario[];
  className: string;
}

export interface CampoLinhaFormulario {
  className: string;
  type:
    | 'text'
    | 'cep'
    | 'select'
    | 'estado'
    | 'date'
    | 'password'
    | 'toogle'
    | 'checkbox'
    | 'codigos'
    | 'banco'
    | 'numero'
    | 'cor'
    | 'textarea'
    | 'select-empresa'
    | 'radio-button'
    | 'text-editor'
    | 'documentos'
    | 'file'
  formControlName: string;
  placeholder: string;
  label?: string;
  options?: { label: string; value: string }[];
  fileAccept?: string;
  mask?: string;
  quantidadeCodigos?: number;
  max?: number;
  min?: number;
  mostrarToogle?: boolean;
  prefix?: string;
  suffix?: string;
  rows?: number;
  minCasaDecimais?: number;
  maxCasaDecimais?: number;
  accept?: string[]
}
