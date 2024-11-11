import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UtilService } from './util.service';
import { inject, Injectable } from '@angular/core';
import { ProfessorDTO } from '../dto/professor.dto';
import { UsuarioDTO } from '../dto/usuario.dto';

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
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.post(`/api/teachers`, body, {headers});
  }

  alterar(body: UsuarioDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.patch(`/api/teachers`, body);
  }

  buscar(id: number){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.get(`/api/teachers/${id}`, {headers});
  }

  buscarTodos(){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.get<UsuarioDTO[]>(`/api/teachers`, {headers});
  }

  deletar(id: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    const params = new HttpParams().set('id', id);

    return this.http.delete(`/api/teachers`, { params, headers });
  }
}
