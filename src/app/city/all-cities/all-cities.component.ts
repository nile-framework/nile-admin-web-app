import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { CityService } from '../../city.service';


@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.css']
})
export class AllCitiesComponent {

  public cities$: FirebaseListObservable<any>

  constructor(
    private _afDb: AngularFireDatabase,
    public cityService: CityService
  ) {
    this.cities$ = this._afDb.list('cities');
  }

    // When an item is selected we do two things.
    // 1. emit the itemPushId
    // 2. mark the selected item as 'active'
    onSelectedCity(cityPushId: any) {
      // 1.
      this.cityService.newCitySelected(cityPushId);
      // this.itemSelected.emit(itemPushId);
  
      // 2.
      // TODO
    }


}
