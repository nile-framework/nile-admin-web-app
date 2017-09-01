import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CityRoutingModule } from './city-routing.module';
import { AddCityComponent } from './add-city/add-city.component';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { CityComponent } from './city/city.component';
import { CityInfoComponent } from './city-info/city-info.component';

@NgModule({
  imports: [
    SharedModule,
    CityRoutingModule
  ],
  declarations: [AddCityComponent, AllCitiesComponent, CityComponent, CityInfoComponent]
})
export class CityModule { }
