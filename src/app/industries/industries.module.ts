import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { IndustriesRoutingModule } from './industries-routing.module';
import { NewIndustryComponent } from './new-industry/new-industry.component';
import { IndustriesComponent } from './industries/industries.component';
import { IndustryComponent } from './industry/industry.component';
import { HomeComponent } from './home/home.component';

import { IndustriesService } from './industries.service';

@NgModule({
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    SharedModule
  ],
  declarations: [
    NewIndustryComponent,
    IndustriesComponent,
    IndustryComponent,
    HomeComponent
  ],
  entryComponents: [
    NewIndustryComponent
  ],
  providers: [
    IndustriesService
  ]
})
export class IndustriesModule { }
