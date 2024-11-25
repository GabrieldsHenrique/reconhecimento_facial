import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CampoComponent } from '../../../shared/formulario/campo/campo.component';
import { LoginComponentService } from './login.service';
import { Router, RouterModule } from '@angular/router';
import { FormularioLoginSimples } from '../../../core/formularios/login/formularioLogin.model';
import { AuthService } from '../../../core/service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginDTO } from '../../../core/dto/auth.dto';
import { UtilService } from '../../../core/service/util.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CampoComponent, RouterModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginComponentService = inject(LoginComponentService);
  authService = inject(AuthService)
  router = inject(Router);
  spinner = inject(NgxSpinnerService)
  utilService = inject(UtilService)
  form = this.loginComponentService.gerarForm()

  estrutura = FormularioLoginSimples

  login(){
    this.spinner.show()

    this.authService.login(this.form.value as LoginDTO).subscribe(
      {
        next: (res) =>{
          localStorage.setItem('token', JSON.stringify(res))
          this.utilService.buscarMe(true)
          this.spinner.hide()
        },
        error: (err) => {
          this.utilService.emitNotificacao('error', err?.error?.message)
          this.spinner.hide()
        }
      }
    )

  }
}
