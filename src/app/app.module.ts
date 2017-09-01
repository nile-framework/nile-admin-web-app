import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// guards
import { LoginStatusGuard } from './login-status.guard';

// Service providers
import { AuthService } from './auth.service';
import { CityService } from './city.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Nile-Admin'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCY8s3f6TRkkeEdygcQxkKAMeoeiYcq-sM',
      libraries: ["places"]
    }),
    AppRoutingModule
  ],
  providers: [
    LoginStatusGuard,
    AuthService,
    CityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
