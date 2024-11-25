import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { UtilService } from '../service/util.service';

export const NotAuthGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  const utilService = inject(UtilService);

  const token = localStorage.getItem('token');

  let me = utilService.me();

  if (!token) {
    return true;
  }else{

    return router.createUrlTree([me?.registration ? `/interno/aluno/disciplinas`  : '/interno/professor/professores']);
  }

};
