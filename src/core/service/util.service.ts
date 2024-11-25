import { MeDTO, UsuarioDTO } from './../dto/usuario.dto';
import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import { Subject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { TokensDTO } from '../dto/auth.dto';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}
  authService = inject(AuthService);
  router = inject(Router);
  private notificacao = new Subject<{
    status: 'success' | 'error' | 'warn' | 'info';
    message: string;
    time: number;
  }>();

  notificationObserver = this.notificacao.asObservable();

  emitNotificacao(
    status: 'success' | 'error' | 'warn' | 'info',
    message: string,
    time: number = 2000
  ) {
    this.notificacao.next({ status, message, time });
  }

  generateParamsPage(event: TableLazyLoadEvent) {
    let params = new HttpParams()
      .set('page', event.first! / event.rows! + 1)
      .set('limit', event.rows!);

    return params;
  }

  generateParamsFilters(params: HttpParams, filter: any) {
    let filters: [string, string][] = Object.entries(filter);

    filters.forEach((filter) => {
      if (filter[1] !== '' && filter[1])
        params = params.append(filter[0], filter[1]);
    });

    return params;
  }

  criaIcone(elemento: string) {
    if (elemento) {
      const primeiraLetra = elemento.charAt(0).toUpperCase();
      let segundaLetra = '';
      if (elemento.indexOf(' ') !== -1) {
        segundaLetra = elemento.split(' ')[1].charAt(0);
      } else {
        segundaLetra = elemento.charAt(1);
      }

      return `${primeiraLetra}${segundaLetra.toUpperCase()}`;
    } else {
      return '';
    }
  }

  tokens(): TokensDTO | undefined {
    if (localStorage.getItem('token')) {
      return JSON.parse(localStorage.getItem('token')!) as TokensDTO;
    } else {
      return undefined;
    }
  }

  buscarMe(home?: boolean) {
    this.authService.me().subscribe((res) => {
      localStorage.setItem('me', JSON.stringify(res));
      if (home) {
        this.router.navigateByUrl(
          this.me()?.identifier
            ? '/interno/professor/professores'
            : '/interno/aluno/disciplinas'
        );
      }
    });
  }

  me(): MeDTO | undefined {
    return JSON.parse(localStorage.getItem('me')!) as MeDTO;
  }

  sair() {
    localStorage.removeItem('me');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
