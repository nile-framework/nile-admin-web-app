import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBrandComponent } from './components/app-brand/app-brand.component';
import { AppNavMenuItemsComponent } from './components/app-nav-menu-items/app-nav-menu-items.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppBrandComponent, AppNavMenuItemsComponent],

})
export class CoreModule { }
