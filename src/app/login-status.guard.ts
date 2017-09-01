import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoginStatusGuard implements CanActivate {

  authListener = this._afAuth.authState;

  constructor(
    private _afAuth: AngularFireAuth
  ) {
    console.log('we ran.');
    
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var authStatus = this.authListener.map( user => {
        if (user) {
          console.log('user was true;');
          return true;
        } else {
          console.log('user was false');
          return false;
        }
      });
      return authStatus;
  }
}
