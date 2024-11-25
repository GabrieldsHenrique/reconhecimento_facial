import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { UtilService } from './../service/util.service';

export const AuthGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  const utilService = inject(UtilService);

  const token = localStorage.getItem('token');

  let me = utilService.me();

  if (token) {
    return true;
  }

  return router.createUrlTree([`/login`]);
};
