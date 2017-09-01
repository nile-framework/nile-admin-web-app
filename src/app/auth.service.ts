import { FirebaseApp } from 'angularfire2/firebase.app.module';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
    private _afAuth: AngularFireAuth
  ) { }

  logout(): firebase.Promise<any> {
    return this._afAuth.auth.signOut();
  }

  login(email: string, password: string): firebase.Promise<any> {
    return this._afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string): firebase.Promise<any> {
    return this._afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
