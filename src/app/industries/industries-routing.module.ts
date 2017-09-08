import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndustriesComponent } from './industries/industries.component';
// import { IndustryComponent } from './industry/industry.component';

const routes: Routes = [
  {
    path: '',
    component: IndustriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
