import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
    authService = inject(AuthService);
    router = inject(Router);
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
        this.authService.user$.subscribe(user => {
          if (user) {
            this.authService.isLoggedIn = true;
          } else {
            this.authService.isLoggedIn = false;
            this.router.navigate(['/login']);
          }
        });
        
        return this.authService.isLoggedIn;
        
    }
}
