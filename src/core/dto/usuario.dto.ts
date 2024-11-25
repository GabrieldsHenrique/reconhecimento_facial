export interface UsuarioDTO {
  name: string;
  email: string;
  password: string;
  dateBirth: string;
  cpf: string;
  cellphone: string;
  id?: string;
}

export interface AlunoDTO extends UsuarioDTO {
  registration?: string
  course?: string;
}
export interface ProfessorDTO extends UsuarioDTO {
  identifier?: string;
}

export interface MeDTO extends UsuarioDTO {
  registration?: string
  course?: string;
  identifier?: string;
  createDate: string
}
export interface PaginateUsuariosDTO {
  data: UsuarioDTO[],
  meta: {
    currentPage: number,
    itemsPerPage: number,
    totalItems: number,
    totalPages: number,
  }
}
