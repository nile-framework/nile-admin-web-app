import { NgModule, Component } from '@angular/core';

import { MdMenuModule, MdCheckboxModule, MdListModule, MdSelectModule, MdButtonToggleModule, 
  MdGridListModule, MdInputModule, MdTabsModule, MdProgressSpinnerModule, 
  MdDialogModule, MdRadioModule, MdCardModule, MdFormFieldModule, MdSnackBarModule } from '@angular/material';

@NgModule({
  exports: [
    MdMenuModule, MdCheckboxModule, MdListModule, MdSelectModule, MdButtonToggleModule, MdGridListModule,
    MdInputModule, MdTabsModule, MdProgressSpinnerModule, MdDialogModule, MdRadioModule, MdCardModule,
    MdFormFieldModule, MdSnackBarModule
  ]
})
export class AngularMaterialModule { }
