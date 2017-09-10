import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { AgmCoreModule } from '@agm/core';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot(),
    AngularMaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AgmCoreModule
  ],
  declarations: [ErrorDialogComponent]
  
})
export class SharedModule {}
