import { NgModule }              from '@angular/core';
import { LoadChildren, RouterModule, Routes } from '@angular/router';

import { LoginStatusGuard } from './login-status.guard'; // <-- check authentication status, returns boolean

 
const appRoutes: Routes = [
  // { path: '', loadChildren: 'app/home/home.module#HomeModule'},
  { path: '', loadChildren: 'app/home/home.module#HomeModule', canActivate:[LoginStatusGuard]},
  { path: '', loadChildren:'app/landing-page/landing-page.module#LandingPageModule'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate:[LoginStatusGuard] },
  { path: 'vendors', loadChildren: 'app/vendors/vendors.module#VendorsModule'},
  { path: 'cities', loadChildren: 'app/city/city.module#CityModule'},
  { path: 'industries', loadChildren: 'app/industries/industries.module#IndustriesModule'},
  { path: 'landing', loadChildren: 'app/landing-page/landing-page.module#LandingPageModule'},
  { path: 'users', loadChildren: 'app/users/users.module#UsersPageModule'},
  { path: '**',  redirectTo:'/error', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
      
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

