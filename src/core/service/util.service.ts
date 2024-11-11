import { Injectable } from '@angular/core';
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

}
