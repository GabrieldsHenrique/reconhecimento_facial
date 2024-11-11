import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProfessorDTO } from '../dto/professor.dto';
import { UtilService } from './util.service';
import { UsuarioDTO } from '../dto/usuario.dto';

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
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.post(`/api/students`, body);
  }

  alterar(body: UsuarioDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.patch(`/api/students`, body);
  }

  buscar(id: number) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.get(`/api/students/${id}`, { headers });
  }

  buscarTodos() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    return this.http.get<UsuarioDTO[]>(`/api/students`, { headers });
  }

  deletar(id: string) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'ngrok-skip-browser-warning': '69420',
    });

    const params = new HttpParams().set('id', id);

    return this.http.delete(`/api/students`, { params, headers });
  }
}
