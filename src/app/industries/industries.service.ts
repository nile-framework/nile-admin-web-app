import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// import { ReplaySubject } from 'rxjs/ReplaySubject';
// import 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/combineLatest';


@Injectable()
export class IndustriesService {

  // private _industries$ = new ReplaySubject<any>(1);
  // public industries$ = this._industries$.asObservable();

  // private _industriesSnpahot;

  // _industriesSnapshot;


  constructor(
    private _afDb: AngularFireDatabase
  ) {
    // this._afDb.list('/industries', {preserveSnapshot: true})
    // .subscribe( industries => {
    //   this._industries$.next(industries);
    //   this._industriesSnapshot = industries;
    // });
  } 

  // https://angularfirebase.com/lessons/autocomplete-search-with-angular4-and-firebase/
  getIndustries(start, end): FirebaseListObservable<any> {
    console.log('we ran again.');
    return this._afDb.list('/industries', {
      query: {
        orderByChild: "name",
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }


  // filterIndustries(searchFilter: string):void {
  //   // console.log('search is: ' + searchFilter);
  //   let value = searchFilter;
  //   let returnList = this._industriesSnapshot;

  //   this._industries$.next(returnList.filter( item => {
  //     let itemName = item.val().name;
  //     console.log(item.val().name.indexOf(value));
  //     let isIndexOf = item.val().name.indexOf(value);
  //     if (isIndexOf) {
  //       return true;
  //     } else {
  //       return false
  //     }
  //     // return listItem;
  //   }));
  // }

}
