import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot()
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AgmCoreModule
  ]
  
})
export class SharedModule {}
