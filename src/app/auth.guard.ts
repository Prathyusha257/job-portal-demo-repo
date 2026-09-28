import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { hasAnyAccount, isLoggedIn } from './data/auth';

export const authGuard: CanActivateFn = () => {

  if (isLoggedIn()) {
    return true;
  }

  inject(Router).navigate(['/login']);
  return false;
};

export const registerGuard: CanActivateFn = () => {

  if (isLoggedIn()) {
    inject(Router).navigate(['/jobs']);
    return false;
  }

  return true;
};

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (isLoggedIn()) {
    router.navigate(['/jobs']);
    return false;
  }

  if (!hasAnyAccount()) {
    router.navigate(['/register']);
    return false;
  }

  return true;
};
