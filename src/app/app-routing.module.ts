import { NgModule }              from '@angular/core';
import { LoadChildren, RouterModule, Routes, ExtraOptions } from '@angular/router';

import { LoginStatusGuard } from './login-status.guard'; // <-- check authentication status, returns boolean

 
const appRoutes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate:[LoginStatusGuard] },
  { path: 'vendors', loadChildren: 'app/vendors/vendors.module#VendorsModule', canActivate:[LoginStatusGuard]},
  { path: 'cities', loadChildren: 'app/city/city.module#CityModule', canActivate:[LoginStatusGuard]},
  { path: 'industries', loadChildren: 'app/industries/industries.module#IndustriesModule', canActivate:[LoginStatusGuard]},
  { path: 'landing', loadChildren: 'app/landing-page/landing-page.module#LandingPageModule', canActivate:[LoginStatusGuard]},
  // { path: 'users', loadChildren: 'app/users/users.module#UsersPageModule'},
  { path: '', redirectTo:'/home' , pathMatch:'full', canActivate:[LoginStatusGuard]},
  { path: '', redirectTo:'/landing', pathMatch:'full'},
  { path: '**',  redirectTo:'/error', pathMatch: 'full' }
];

const config: ExtraOptions = {
  useHash: false,
  // preloadingStrategy: PreloadAllModules
  enableTracing: true // <-- debugging purposes only
};
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      config
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

