import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../app/externo/externo.component").then(
        (m) => m.ExternoComponent
      ),
    children: [
      {
        path: "login",
        loadComponent: () =>
          import("../app/externo/login/login.component").then(
            (m) => m.LoginComponent
          ),
        // canMatch: [NotAuthGuard],
      },
      {
        path: "cadastrar",
        loadComponent: () =>
          import("../app/externo/cadastrar/cadastrar.component").then(
            (m) => m.CadastrarComponent
          ),
        // canMatch: [NotAuthGuard],
      },
      {
        path: "**",
        redirectTo: "login",
        pathMatch: "full",
      },
    ]
    }
];
