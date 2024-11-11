import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    return this.http.post(`/api/teachers`, body);
  }
}
