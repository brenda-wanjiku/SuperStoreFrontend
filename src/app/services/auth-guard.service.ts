import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) { }


 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(take(1));
  }
}



