import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';

import { CityService } from '../../city.service';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent {

  public citySelected: boolean;
  public cityLoading: boolean;
  public editing: boolean;

  public cityInfoForm: FormGroup;

  public currentCityId: string;


  constructor(
    private _afDb: AngularFireDatabase,
    private _fb: FormBuilder,
    public cityService: CityService
  ) {
    this.buildCityInfoForm();

    this.cityService.cityLoading.subscribe( value => {
      this.citySelected = value;
      this.cityLoading = value;
    });
    this.cityService.city.subscribe( snapshot => {
      this.currentCityId = snapshot.key;
      let value = snapshot.val();
      this.cityLoading = false;
      
      this.cityInfoForm.controls['name'].setValue(value.name);
      this.cityInfoForm.controls['active'].setValue(value.active);
      this.cityInfoForm.disable();
    })
  }

  
  buildCityInfoForm() {
    this.cityInfoForm = this._fb.group({
      name: ['', Validators.required],
      active: ['', Validators.required]
    })
  }

  editItem() {
    this.editing = true;
    this.cityInfoForm.enable();
  }

  save() {
    if (this.cityInfoForm.invalid) {
      // form invalid
    } else {
      let formRef = this.cityInfoForm; // so we don't have to type as much.
      let toWrite: any = {};

      if (!this.cityInfoForm.pristine) {
        if (!formRef.controls['name'].pristine) {
          toWrite.name = formRef.value.name;
        }
        if (!formRef.controls['active'].pristine) {
          toWrite.active = formRef.value.active;
        }
      }

      // now make the database write
      this._afDb.object(`cities/${this.currentCityId}`).update(toWrite);

      // TODO, re format the above flow so that these two actions run once all possible database wrties have finished.
      this.editing = false;
      this.cityInfoForm.disable();
    }
  }

  dismiss() {
    this.editing = false;
    this.cityInfoForm.disable();
  }


  delete() {
    this._afDb.object(`cities/${this.currentCityId}`).remove().then( snapshot => { 
      this.editing = false;
      this.cityInfoForm.disable();
      this.citySelected = false;
    }, error => {
      console.error('hmmm, delete threw an error of: ' + error);
    });
  }


}
