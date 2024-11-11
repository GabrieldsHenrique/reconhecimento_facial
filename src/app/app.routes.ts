import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'interno',
    loadComponent: () =>
      import('../app/interno/interno.component').then(
        (m) => m.InternoComponent
      ),

      children: [
        {
          path: 'admin',
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
              path: 'salas',
              loadComponent: () =>
                import("../app/interno/admin/salas/salas.component").then(
                  (m) => m.SalasComponent
                ),
            }
          ]
        }
      ]
  },
  {
    path: '',
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
        // canMatch: [NotAuthGuard],
      },
      {
        path: 'cadastrar',
        loadComponent: () =>
          import('../app/externo/cadastrar/cadastrar.component').then(
            (m) => m.CadastrarComponent
          ),
        // canMatch: [NotAuthGuard],
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];
