import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class CityService {

  // CITY LOADING OBSERVABLE
  private _cityLoading = new ReplaySubject<boolean>(1);
  public cityLoading = this._cityLoading.asObservable();

  // CITY SNAPSHOT OBSERVABLE
  private _city = new ReplaySubject<any>(1);
  public city = this._city.asObservable();

  // ALL CITIES
  private _allCities = new ReplaySubject<any>(1);
  public allCities = this._allCities.asObservable();

  constructor(
    private _afDb: AngularFireDatabase
  ) {
    this.fetchAllCities();
  }

  fetchAllCities() {
    this._afDb.list(`cities`, {preserveSnapshot: true}).map( snapshots => {
      this._allCities.next(snapshots);
    }).subscribe();
  }



  newCitySelected(cityPushId: string) {
    // emit true for the loading observable
    this._cityLoading.next(true);
    // fetch the snapshot, we map the snapshot observable and emit a new observable containing the value of the snapshot.
    this.fetchCitySnapshot(cityPushId);
  }

  fetchCitySnapshot(cityPushId: string) {
    this._afDb.object(`cities/${cityPushId}`, {preserveSnapshot: true}).map( snapshot => {
      if (snapshot.val() != null) {
        this._city.next(snapshot);
      }
    }).subscribe();
  }
}
