import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { IndustriesRoutingModule } from './industries-routing.module';
import { NewIndustryComponent } from './new-industry/new-industry.component';
import { IndustriesComponent } from './industries/industries.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    SharedModule
  ],
  declarations: [
    NewIndustryComponent,
    IndustriesComponent,
    ErrorComponent
  ],
  entryComponents: [
    NewIndustryComponent,
    ErrorComponent
  ]
})
export class IndustriesModule { }
