import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';

import { LandingPageComponent } from './landing-page/landing-page.component';

import { SharedModule } from '../shared/shared.module';
import { LoginErrorComponent } from './login-error/login-error.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandingPageRoutingModule
  ],
  declarations: [
    LandingPageComponent,
    LoginErrorComponent
  ],
  entryComponents: [
    LoginErrorComponent
  ]
})
export class LandingPageModule { }
