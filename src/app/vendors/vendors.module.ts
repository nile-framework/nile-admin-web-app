import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

// vendors service provider
import { VendorService } from './vendor.service';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors/vendors.component';
import { NewVendorComponent } from './new-vendor/new-vendor.component';
import { AllVendorsComponent } from './all-vendors/all-vendors.component';
import { InfoVendorComponent } from './info-vendor/info-vendor.component';
import { VendorCitiesComponent } from './vendor-cities/vendor-cities.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VendorsRoutingModule
  ],
  declarations: [
    VendorsComponent,
    NewVendorComponent,
    AllVendorsComponent,
    InfoVendorComponent,
    VendorCitiesComponent
  ],
  providers: [
    VendorService
  ]
})
export class VendorsModule { }
