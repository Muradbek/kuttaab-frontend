import { inject } from '@angular/core';
import { type CanActivateChildFn, Router } from '@angular/router';

export const isLoggedGuard: CanActivateChildFn = () => {
  const token = localStorage.getItem('debug_token');
  const router = inject(Router);
  if (!token) {
    router.navigate(['/login']);
  }
  return !!token;
};
