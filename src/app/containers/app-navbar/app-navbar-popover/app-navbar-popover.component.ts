import { Component, OnInit, Output, Input, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-navbar-popover',
  templateUrl: './app-navbar-popover.component.html',
  styleUrls: ['./app-navbar-popover.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavbarPopoverComponent implements OnInit {
  // initially hide the navigation menu.
  hide = true;

  @Input() signedIn = false;
  @Input() appVersion = '';

  @Output() signOut = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  
  handleSignOut() {
    this.signOut.emit();
  }

  hideMenu() {
    this.hide = true;
  }

  toggleMenu() {
    this.hide = !this.hide;
  }

}
