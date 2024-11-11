


export interface ColumnsTableDTO {
  name?: string;
  width: string;
  variavel?: string;
  ordenar?: boolean;
  pipe?: 'documento' | 'date' | 'dinheiro' | 'textTransform' | 'porcentagem' | 'telefone';
  tranform?: Function;
  transformClass?: Function
  condicional?: CondicaoDTO;
  class?: string;
  type: 'text'| 'botao';
  botoes?: BotaoDTO[];

}

interface BotaoDTO {
  icon?: string;
  label?: string;
  action?: string;
  classe?: string,
}


export interface ItensAcoesDTO {
  name: string;
  icon: string;
  action: string;
  variavel?: string;
  condicional?: CondicaoDTO;
}

interface IconStatusDTO {
  variavel: string;
  tipoIcon: string;
}


interface CondicaoDTO {
  variavel: any; //variavel do Objeto a ser listado
  condicao: any; // condição para que o mesmo apareça
}

export interface PesquisarDTO {
  paginate: PaginateDTO;
  ordenacao: OrdenacaoDTO;
}

export interface PaginateDTO {
  sortOrder: string;
  sortProperties: string;
  size: number;
  page: number;
}

export interface BaseDTO {
  criadoEm: Date;
  deletadoEm: Date;
  alteradoEm: Date;
}
interface OrdenacaoDTO {
  sortOrder: string;
  sortProperties: string;
}

export interface labelFooterDTO {
  type: 'label' | 'button';
  titulo: {
    class: string;
    label: string;
  };
  valor?: {
    class: string;
    label: any;
  };
}


export interface PaginateDTO {
  currentPage: number,
  paginatedElements: number,
  totalElements: number,
  totalPages: number,
}
