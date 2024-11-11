import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

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

}
