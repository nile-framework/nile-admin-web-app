import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { IndustryComponent } from './industry/industry.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':industryId',
        component: IndustryComponent
      },
      {
        path: '',
        component: IndustriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }



// const crisisCenterRoutes: Routes = [
//   {
//     path: '',
//     component: CrisisCenterComponent,
//     children: [
//       {
//         path: '',
//         component: CrisisListComponent,
//         children: [
//           {
//             path: ':id',
//             component: CrisisDetailComponent,
//             canDeactivate: [CanDeactivateGuard],
//             resolve: {
//               crisis: CrisisDetailResolver
//             }
//           },
//           {
//             path: '',
//             component: CrisisCenterHomeComponent
//           }
//         ]
//       }
//     ]
//   }
// ];