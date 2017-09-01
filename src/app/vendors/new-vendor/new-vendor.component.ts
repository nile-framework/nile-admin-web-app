import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-new-vendor',
  templateUrl: './new-vendor.component.html',
  styleUrls: ['./new-vendor.component.css']
})
export class NewVendorComponent {

  newVendorForm: FormGroup

  constructor(
    private _afDb: AngularFireDatabase,
    private _fb: FormBuilder
  ) {
    this.buildNewItemForm();
  }


  buildNewItemForm() {
    this.newVendorForm = this._fb.group({
      name: ['', Validators.required]
    });
  }


  // This runs when the user clicks " + Add Item " in the view.
  onSubmit() {
    // first we check if the form is invalid, then we can inform the user.
    if (this.newVendorForm.invalid) {
      // inform user input is invalid.
    } else {
      // the input is valid, lets check if the item name already exist.
      if (this.doesNameExist(this.newVendorForm.value.name) === false){
        // continue
        this._afDb.list(`vendors`).push({
          name: this.newVendorForm.value.name
        }).then( _ => {
          this.resetComponent();
        }, error => {
          // handle error
        })
      } else {
        // inform user the name is already in use.
      }
    }
  }


  doesNameExist(name: string): boolean {
    // let itemNameRef = this._afDb.object(`inventoryItemNames/${name}`, {preserveSnapshot: true})
    // itemNameRef.subscribe( snapshot => {
    //   let value = snapshot.val();
    //   console.log('value is: ' + value);
    // });
    return false;
  }


  resetComponent() {
    this.newVendorForm.reset();
  }

}
