import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const data = sessionStorage.getItem('usuario');

  if (data) {
    return true;
  } else {
    return router.parseUrl('/pages/login');
  }
};
