import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  url = 'https://2b0b-186-250-206-173.ngrok-free.app'

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

  generateParamsPage(
    event: TableLazyLoadEvent,
    sortOrder: string,
    sortProperties: string
  ) {
    let params = new HttpParams()
      .set(
        'sortOrders',
        event.sortField ? (event.sortOrder === 1 ? 'asc' : 'desc') : sortOrder
      )
      .set(
        'sortProperties',
        event.sortField?.toString()
          ? event.sortField?.toString()
          : sortProperties
      )
      .set('page', event.first! / event.rows!)
      .set('size', event.rows!);

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

}
