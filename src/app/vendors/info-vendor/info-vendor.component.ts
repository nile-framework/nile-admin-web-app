import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';

import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-info-vendor',
  templateUrl: './info-vendor.component.html',
  styleUrls: ['./info-vendor.component.css']
})
export class InfoVendorComponent {

  public shouldShow: boolean;
  public isLoading: boolean;
  public editing: boolean;

  public vendorInfoForm: FormGroup;

  public currentVendorId: string;

  constructor(
    private _afDb: AngularFireDatabase,
    private _fb: FormBuilder,
    private _vendorService: VendorService
  ) {
    this.buildVendorInfoForm();

    this._vendorService.shoudlShow.subscribe( shouldShow => {
      if (shouldShow) {
        this.shouldShow = true;
      } else {
        this.shouldShow = false;
      }
    });

    this._vendorService.vendorLoading.subscribe( loading => {
      this.isLoading = loading;
    });

    this._vendorService.currentVendor.subscribe( snapshot => {
      if (snapshot === null) {
        this.vendorInfoForm.reset();
        this.shouldShow = false;
      } else {
        let value = snapshot.val();
        this.vendorInfoForm.reset();
        this.currentVendorId = snapshot.key;
        this.isLoading = false;
        this.vendorInfoForm.controls['name'].setValue(value.name);
        this.vendorInfoForm.disable();
      }
    });

    
  }


  buildVendorInfoForm() {
    this.vendorInfoForm = this._fb.group({
      name: ['', Validators.required]
    });
  }

  editItem() {
    this.editing = true;
    this.vendorInfoForm.enable();
  }

  save() {
    if (this.vendorInfoForm.invalid) {
      // form invalid
    } else {
      let formRef = this.vendorInfoForm; // so we don't have to type as much.
      let toWrite: any = {};

      if (!this.vendorInfoForm.pristine) {
        if (!formRef.controls['name'].pristine) {
          toWrite.name = formRef.value.name;
        }
      }

      // now make the database write
      this._afDb.object(`vendors/${this.currentVendorId}`).update(toWrite);

      // TODO, re format the above flow so that these two actions run once all possible database wrties have finished.
      this.editing = false;
      this.vendorInfoForm.disable();
    }
  }

  dismiss() {
    this.editing = false;
    this.vendorInfoForm.disable();
  }


  delete() {
    this._afDb.object(`vendors/${this.currentVendorId}`).remove().then( snapshot => { 
      this.editing = false;
      this.vendorInfoForm.disable();
      this.shouldShow = false;
    }, error => {
      console.error('hmmm, delete threw an error of: ' + error);
    });
  }








}
