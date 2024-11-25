import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProfessorDTO } from '../dto/professor.dto';
import { UtilService } from './util.service';
import { PaginateUsuariosDTO, UsuarioDTO } from '../dto/usuario.dto';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  utilService = inject(UtilService);

  http = inject(HttpClient);
  constructor() {}

  criar(body: UsuarioDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post(`/api/users/alunos`, body);
  }

  alterar(body: UsuarioDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.patch(`/api/users/alunos`, body);
  }

  buscar(id: number) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(`/api/users/alunos/${id}`, { headers });
  }

  buscarTodos(params: HttpParams) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.get<PaginateUsuariosDTO>(`/api/users`, { headers, params });
  }

  deletar(id: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    const params = new HttpParams().set('id', id);

    return this.http.delete(`/api/users/alunos`, { params, headers });
  }
}
