import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UsuarioDTO } from '../dto/usuario.dto';
import { UtilService } from './util.service';
import { DisciplinaDTO, PaginateDisciplinasDTO } from '../dto/disciplina.dto';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  utilService = inject(UtilService);

  http = inject(HttpClient);
  constructor() { }

  criar(body: DisciplinaDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post(`/api/disciplines/`, body);
  }

  alterar(body: UsuarioDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.patch(`/api/disciplines`, body);
  }

  buscar(id: number) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(`/api/disciplines/${id}`,);
  }

  buscarTodos(params: HttpParams) {

    return this.http.get<PaginateDisciplinasDTO>(`/api/disciplines`,);
  }

  deletar(id: string) {

    const params = new HttpParams().set('id', id);

    return this.http.delete(`/api/disciplines`, { params });
  }

  inscrever(body: {studentsId:string[]} , id: number){

    return this.http.post(`/api/disciplines/${id}/students`,body );
  }
}
