import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChildRouteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const previousUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();

    if (previousUrl === '/login') {
      return true;
    } else {
      this.router.navigate(['/pagina-inicial']);
      return false;
    }
  }
}
