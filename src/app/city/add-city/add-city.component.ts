import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent {

  newCityForm: FormGroup;

  constructor(
    private _afDb: AngularFireDatabase,
    private _fb: FormBuilder
  ) {
    this.buildNewCityForm();
  }

  buildNewCityForm() {
    this.newCityForm = this._fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if( this.newCityForm.invalid) {
      // invalid form
    } else {
      if (this.doesNameExist(this.newCityForm.value.name) === false) {
        this._afDb.list(`cities`).push({
          name: this.newCityForm.value.name,
          active: 'false'
        }).then( snapshot => {
          this.resetComponent();
        }, error => {
          console.error(error);
        })
      } else {
        // the name already is in use.
      }
    }
  }


  doesNameExist(name: string): boolean {
    // TODO: check if name exists
    return false;
  }


  resetComponent() {
    this.newCityForm.reset();
  }

}
