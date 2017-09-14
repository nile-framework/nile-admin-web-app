import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavMenu: boolean;
  
  constructor(
    private _afAuth: AngularFireAuth,
    private _router: Router
    
  ) {
    const authListener = this._afAuth.authState.subscribe( user => {
      if (user) {
        // navigate to the home screen.
        this._router.navigate(['home']);
        // this._router.navigate(['industries']);
        this.showNavMenu = true;
      } else {
        // navigate to the landing page.
        this.showNavMenu = false;
        this._router.navigate(['landing']);
      }
    })
  }
}