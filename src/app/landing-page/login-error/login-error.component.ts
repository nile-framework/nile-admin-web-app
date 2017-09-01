import { Component, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent {

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }
  
}
