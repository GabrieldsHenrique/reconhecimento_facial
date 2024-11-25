import { AlunoGuard } from '../core/guard/aluno.guard';
import { NotAuthGuard } from '../core/guard/notAuth.guard';
import { ProfessorGuard } from '../core/guard/professor.guard';
import { AuthGuard } from './../core/guard/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'interno',
    canMatch: [AuthGuard],
    loadComponent: () =>
      import('../app/interno/interno.component').then(
        (m) => m.InternoComponent
      ),
      children: [
        {
          path: 'professor',
          canMatch: [ProfessorGuard],
          children: [
            {
              path: 'professores',
              loadComponent: () =>
                import("../app/interno/admin/professores/professores.component").then(
                  (m) => m.ProfessoresComponent
                ),
            },
            {
              path: 'alunos',
              loadComponent: () =>
                import("../app/interno/admin/alunos/alunos.component").then(
                  (m) => m.AlunosComponent
                ),
            },
            {
              path: 'cameras',
              loadComponent: () =>
                import("../app/interno/admin/cameras/cameras.component").then(
                  (m) => m.CamerasComponent
                ),
            },
            {
              path: 'disciplinas',
              loadComponent: () =>
                import("../app/interno/admin/disciplinas/disciplinas.component").then(
                  (m) => m.DisciplinasComponent
                ),
            },
            {
              path: 'salas',
              loadComponent: () =>
                import("../app/interno/admin/salas/salas.component").then(
                  (m) => m.SalasComponent
                ),
            }
          ]
        },
        {
          path: 'aluno',
          canMatch: [AlunoGuard],
          children: [
            {
              path: 'disciplinas',
              loadComponent: () =>
                import("../app/interno/aluno/disciplinas/disciplinas.component").then(
                  (m) => m.DisciplinasComponent
                ),
            },
            {
              path: 'minhas-disciplinas',
              loadComponent: () =>
                import("../app/interno/aluno/minhas-disciplinas/minhas-disciplinas.component").then(
                  (m) => m.MinhasDisciplinasComponent
                ),
            },
          ]
        }
      ]
  },
  {
    path: '',
    canMatch: [NotAuthGuard],
    loadComponent: () =>
      import('../app/externo/externo.component').then(
        (m) => m.ExternoComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('../app/externo/login/login.component').then(
            (m) => m.LoginComponent
          ),

      },
      {
        path: 'cadastrar',
        loadComponent: () =>
          import('../app/externo/cadastrar/cadastrar.component').then(
            (m) => m.CadastrarComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];
