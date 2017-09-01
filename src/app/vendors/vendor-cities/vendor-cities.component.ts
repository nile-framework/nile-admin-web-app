import { Component, NgZone, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

import { AngularFireDatabase } from 'angularfire2/database';

import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-cities',
  templateUrl: './vendor-cities.component.html',
  styleUrls: ['./vendor-cities.component.css']
})
export class VendorCitiesComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  public shouldShow: boolean;

  addLocationForm: FormGroup;

  addCityForm: FormGroup;

  currentVendorId;

  public vendorCities;
  public antiVendorCities;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private _afDb: AngularFireDatabase,
    private _fb: FormBuilder,
    private _vendorService: VendorService
  ) {
    this.buidlAddCityForm();

    this._vendorService.vendorPushId.subscribe(value => {
      this.currentVendorId = value;
    });

    this._vendorService.shoudlShow.subscribe( shouldShow => {
      if (shouldShow) {
        this.shouldShow = true;
      } else {
        this.shouldShow = false;
      }
    });

    this._vendorService.vendorCities.subscribe( snapshots => {
      console.log(snapshots);
      this.vendorCities = snapshots;
    })

    this._vendorService.antiVendorCities.subscribe( snapshots => {
      // console.log('antiVendorCities snapshot :' + snapshots);
      // console.dir(snapshots);
      this.antiVendorCities = snapshots;
    });
  }


  ngOnInit() {

    // MAP STUFF START
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  // MAP STUFF END



  

  buidlAddCityForm() {
    this.addCityForm = this._fb.group({
      cityToAdd: ['', Validators.required]
    });
  }

  buildAddLocationForm() {
    this.addLocationForm = this._fb.group({
      address: ['']
    });
  }

  addCity() {
    if (this.addCityForm.invalid){
      // from invalid
    } else {
      let cityKey = this.addCityForm.value.cityToAdd.key;
      let cityName = this.addCityForm.value.cityToAdd.val().name;
      this._afDb.object(`vendors/${this.currentVendorId}/cities`).update({
        [cityKey]: cityName
      }).then( snapshot => {
        this.addCityForm.reset();
      });
    }
  }

  addLocation() {

  }


  onSubmit() {

  }





}
