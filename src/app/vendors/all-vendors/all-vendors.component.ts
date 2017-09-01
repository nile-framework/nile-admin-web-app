import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { VendorService } from '../vendor.service';


@Component({
  selector: 'app-all-vendors',
  templateUrl: './all-vendors.component.html',
  styleUrls: ['./all-vendors.component.css']
})
export class AllVendorsComponent {

  public vendors$: FirebaseListObservable<any>;

  constructor(
    private _afDb: AngularFireDatabase,
    private _vendorService: VendorService
  )
   {
    this.vendors$ = this._afDb.list('vendors');
   }


  // When an item is selected we do two things.
    // 1. emit the itemPushId
    // 2. mark the selected item as 'active'
  onSelectItem(itemPushId: any) {
    // 1.
    this._vendorService.newVendorSelected(itemPushId);
    // this.itemSelected.emit(itemPushId);

    // 2.
    // TODO
  }




}
