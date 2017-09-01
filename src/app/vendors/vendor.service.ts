import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { CityService } from '../city.service';


@Injectable()
export class VendorService {

  // hide everything
  private _shoudlShow = new BehaviorSubject<boolean>(false);
  public shoudlShow = this._shoudlShow.asObservable();

  // loading subscribers
  private _vendorLoading = new ReplaySubject<boolean>(1);
  public vendorLoading = this._vendorLoading.asObservable();

  // vendor snapshot
  private _currentVendor = new ReplaySubject<any>(1);
  public currentVendor = this._currentVendor.asObservable();

  // vendor cities
  private _vendorCities = new ReplaySubject<any>(1);
  public vendorCities = this._vendorCities.asObservable();

  // ANTI vendor cities, cities the vendor is not in.
  private _antiVendorCities = new ReplaySubject<any>(1);
  public antiVendorCities = this._antiVendorCities.asObservable();

  // current vendor city
  private _currentVendorCity = new ReplaySubject<any>(1);
  public currentVendorCity = this._currentVendorCity.asObservable();


  // we make use of this in this service as well as components.
  private _vendorPushId = new ReplaySubject<string>(1);
  public vendorPushId = this._vendorPushId.asObservable();



  vendorRef$;

  constructor(
    private _afDb: AngularFireDatabase,
    public cityService: CityService
  ) {
    this.cityService.allCities.subscribe( snapshots => {
      this._antiVendorCities.next(snapshots);
    });

    // this.vendorPushId.subscribe( vendorPushId => {
    //   // console.log('vendor push id is: ' + vendorPushId);
    //   this.calculateAntiVendorCities(vendorPushId);
    // })
  }

  newVendorSelected(vendorPushId: string) {
    this._shoudlShow.next(true);
    this._vendorLoading.next(true);
    this.fetchVendorSnapshot(vendorPushId);
    this._vendorPushId.next(vendorPushId);
    this.fetchVendorCities(vendorPushId);
  }

  fetchVendorCities(vendorPushId: string) {
    this._afDb.list(`vendors/${vendorPushId}/cities`, {preserveSnapshot: true}).map( snapshots => {
      if (snapshots.length === 0) {
        this._vendorCities.next(false);
        // console.log('vendors cities === 0');
      } else {
        this._vendorCities.next(snapshots);
        // console.log('vendorCities has emitted.');
      }
    }).subscribe();
  }


  fetchVendorSnapshot(vendorPushId: string) {
    let vendorRef$ = this._afDb.object(`vendors/${vendorPushId}`, {preserveSnapshot: true});
    this.vendorRef$ = vendorRef$.map( snapshot => {
      if (snapshot.val() != null) {
        this._currentVendor.next(snapshot);
      }
    }).subscribe();
  }

  

  // calculateAntiVendorCities(vendorPushId: string) {
  //   this.cityService.allCities.combineLatest(this.vendorCities, (allCities: Array<any>, vendorCities: false | Array<any>) => {
  //     // console.log('hello world');
  //     if (vendorCities === false) {
  //       // no cities have been added to the vendor yet, so emit all cities.
  //       // console.log('vendor cities is false');
  //       this._antiVendorCities.next(allCities);
  //     } else {
  //       // console.log(vendorCities);
  //       vendorCities.forEach( city => {
  //         allCities
  //       })


  //       // console.log('vendor cities IS NOT false.');
  //       let antiVendorCities: any = {};
  //       allCities.map( city => {
  //         let cityKey = allCities[city].key;
  //         vendorCities
          
  //       })
  //     }
  //   }).subscribe();
  // }

}


