import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProfessorDTO } from '../dto/professor.dto';
import { UtilService } from './util.service';
import { UsuarioDTO } from '../dto/usuario.dto';

@Injectable({
  providedIn: 'root'
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
}
