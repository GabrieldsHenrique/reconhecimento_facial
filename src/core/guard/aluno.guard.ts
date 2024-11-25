import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { UtilService } from '../service/util.service';

export const AlunoGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  const utilService = inject(UtilService);

  const token = localStorage.getItem('token');

  let me = utilService.me();

  if(me?.registration){
    return true
  }else{
    return router.createUrlTree([`/interno/professor/alunos`]);
  }
};
