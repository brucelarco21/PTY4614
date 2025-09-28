// filepath: src/app/guards/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Recuperamos rol como string directo desde localStorage
  const rol = localStorage.getItem('rol'); 

  if (!rol) {
    // No está logeado
    router.navigate(['/login']);
    return false;
  }

  // Si la ruta tiene roles esperados en la data
  const expectedRoles = route.data?.['roles'] as string[] | undefined;

  if (expectedRoles && !expectedRoles.includes(rol)) {
    // Tiene rol pero no autorizado → redirigimos según su rol
    if (rol === 'vecino') {
      router.navigate(['/home']); 
    } else if (rol === 'admin') {
      router.navigate(['/admin']); 
    } else {
      router.navigate(['/login']);
    }
    return false;
  }

  // Si pasa validaciones → acceso permitido
  return true;
};
