import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CampoComponent } from '../../../shared/formulario/campo/campo.component';
import { LoginComponentService } from './login.service';
import { RouterModule } from '@angular/router';
import { FormularioLoginSimples } from '../../../core/formularios/login/formularioLogin.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CampoComponent, RouterModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginComponentService = inject(LoginComponentService)

  form = this.loginComponentService.gerarForm()

  estrutura = FormularioLoginSimples

  login(){

  }
}
