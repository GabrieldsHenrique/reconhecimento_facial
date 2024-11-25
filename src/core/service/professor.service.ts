import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UtilService } from './util.service';
import { inject, Injectable } from '@angular/core';
import { ProfessorDTO } from '../dto/professor.dto';
import { PaginateUsuariosDTO, UsuarioDTO } from '../dto/usuario.dto';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  utilService = inject(UtilService);

  http = inject(HttpClient);
  constructor() {}

  criar(body: UsuarioDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post(`/api/users/professores`, body, {headers});
  }

  alterar(body: UsuarioDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.patch(`/api/users/professores`, body);
  }

  buscar(id: number){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(`/api/users/professores/${id}`, {headers});
  }

  buscarTodos(params: HttpParams){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get<PaginateUsuariosDTO>(`/api/users`, {headers, params});
  }

  deletar(id: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    const params = new HttpParams().set('id', id);

    return this.http.delete(`/api/users/professores`, { params, headers });
  }
}
