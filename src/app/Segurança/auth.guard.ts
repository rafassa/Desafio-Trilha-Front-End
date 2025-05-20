import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Verifica se o usuário veio da rota pai
    const cameFromParent = state.url.startsWith('/pai');

    if (!cameFromParent) {
      this.router.navigate(['/pai']);
      return false;
    }

    return true;
  }
}
