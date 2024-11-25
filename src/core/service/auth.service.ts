import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDTO, TokensDTO } from '../dto/auth.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  constructor() {}

  login(body: LoginDTO) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post(`/api/auth/sign-in`, body);
  }

  me(){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(`/api/auth/me`);
  }
}
