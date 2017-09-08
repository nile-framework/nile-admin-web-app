import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {MdDialog, MdDialogRef} from '@angular/material';

import { AuthService } from '../../auth.service';

import { LoginErrorComponent } from '../login-error/login-error.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  loginForm: FormGroup;
  signupForm: FormGroup;

  public showLoading: boolean;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
    public dialog: MdDialog
  ) {
    this.showLoading = false;
    
    this.buildLoginForm();
    this.buildSignupForm();
  }

  buildLoginForm() {
    this.loginForm = this._fb.group({
      email: [''],
      password: ['']
    })
  }

  buildSignupForm() {
    this.signupForm = this._fb.group({
      email: [''],
      password: [''],
      accessCode: ['']
    })
  }

  onLogin() {    
    if (this.loginForm.invalid) {
      console.log('login form was not valid');
      
      // invalid form
    } else {
      // attempt login
      console.log('login form was valid.');
      this._auth.login(this.loginForm.value.email, this.loginForm.value.password).then( user => {
        this.showLoading = false;
        this._router.navigate(['/home']);
      }, error => {
        this.showLoading = false;
        let dialogRef = this.dialog.open(LoginErrorComponent, {
          data: error
        });
      });
      this.showLoading = true;
    }
  }

  onSignup() {
    if (this.signupForm.invalid) {
      // invalid form
      // TODO: maybe notify the user that their email or password was not valid.
    } else {
      // attempt signup
      // but first check the access code.
        if (this.signupForm.value.accessCode === 'angular is the best') {
          this._auth.signUp(this.signupForm.value.email, this.signupForm.value.password).then( user => {
            this.showLoading = false;
            this._router.navigate(['/account-info']);
          }, error => {
            console.log('something didnt work.');
            this.showLoading = false;
          })
          this.showLoading = true;
        } else {
          this.showLoading = false;
          // invalid access code
        }
      }

  }



}
