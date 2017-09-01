import { NgModule } from '@angular/core';

import { MdMenuModule, MdCheckboxModule, MdListModule, MdSelectModule, MdButtonToggleModule, 
  MdGridListModule, MdInputModule, MdTabsModule, MdProgressSpinnerModule, 
  MdDialogModule, MdRadioModule, MdCardModule } from '@angular/material';

@NgModule({
  exports: [
    MdMenuModule, MdCheckboxModule, MdListModule, MdSelectModule, MdButtonToggleModule, MdGridListModule,
    MdInputModule, MdTabsModule, MdProgressSpinnerModule, MdDialogModule, MdRadioModule, MdCardModule
  ]
})
export class AngularMaterialModule { }
