import { AlunoDTO, ProfessorDTO } from "./usuario.dto";

export interface DisciplinaDTO {
  name: string;
  code: string;
  ipCamera: string;
  students?: AlunoDTO[],
  teacher?: ProfessorDTO,
  id?:number
}
export interface PaginateDisciplinasDTO {
  data: DisciplinaDTO[],
  meta: {
    currentPage: number,
    itemsPerPage: number,
    totalItems: number,
    totalPages: number,
  }
}
