import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarPopoverComponent } from './app-navbar-popover/app-navbar-popover.component';
import { AppNavbarUserComponent } from './app-navbar-user/app-navbar-user.component';
import { AppNavbarComponent } from './app-navbar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppNavbarPopoverComponent,
    AppNavbarUserComponent,
    AppNavbarComponent,
  ]
})
export class AppNavbarModule { }
