import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app-navbar-user',
  templateUrl: './app-navbar-user.component.html',
  styleUrls: ['./app-navbar-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavbarUserComponent {

  @Input() userImageUrl = '';
  @Input() signedIn = false;

  @Output() signIn = new EventEmitter();

  constructor() { }
  
  handleSignIn() {
    this.signIn.emit();
  }

}
