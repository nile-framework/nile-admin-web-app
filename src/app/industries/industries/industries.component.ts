import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MdDialog } from '@angular/material';
import { MdSnackBar } from '@angular/material';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { NewIndustryComponent } from '../new-industry/new-industry.component';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  form: FormGroup;
  industries$: FirebaseListObservable<any>;
  sortSubject: BehaviorSubject<any>;

  constructor(
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    private _fb: FormBuilder,
    private _afDb: AngularFireDatabase,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.buildForm();

  }

  // this is a lifecycle function, it runs when the component has been initialized.
  ngOnInit() {
  }

  // when the user clicks 'Add Industry' this function runs.
  addIndustryDialog(): void {
    let dialogRef = this.dialog.open(NewIndustryComponent, {
      height: '200px',
      width: '300px'
    });
    // we subscribe to dialogs close event.
    dialogRef.afterClosed().subscribe( result => {
      // console.log('result from the dialog is: ' + result);
      if (result) {
        // there is a result to process, lets now write it to the database.
        this.writeToDataBase(result).then( snapshot => {
        // the database write was successful
        let snackBarRef = this.snackBar.open( 'Industry added to database', 'Okay', { 
          duration: 2000,
         });
        }, error => {
          // open a new dialog showing the error
          let dialogRef = this.dialog.open(ErrorDialogComponent, {
            height: '200px',
            width: '300px',
            data:  error
          });
        });
      } else {
        // result was false, do nothing.
        return;
      }
    });
  }

  // the new industry is written to the data with below components
  writeToDataBase(IndustryName:string): firebase.Promise<any> {
    return this._afDb.list(`industries`).push({
    name: IndustryName,
    creationTimeStamp: firebase.database.ServerValue.TIMESTAMP
    })
  }
  
  // the user clicks a specific industry
  // TODO: navigate to the IndustryComponent with the selected industryId
  goToIndustry(industryId: string){
    console.log( industryId);
    // navigate to the specific industry page.
    this._router.navigate([`${industryId}`], {relativeTo: this._route});
  }


  // NOW worry about me.
  // we build the form in a separate function, this helps keep the constructor clean.
  buildForm() {

    this.form = this._fb.group({
      searchInput: []
    });
    // now we subscribe to any changes coming from the form.
    // so when a user types, this function runs and emits the .next() function on the Subject
    this.form.valueChanges.subscribe( data => {
      console.log(data.searchInput);
      // now we can call the next function on the Subject, as the AngularFire docs show.
      this.sortSubject.next(data.searchInputs);
      console.log(this.sortSubject);
    });
    this.industries$ = this._afDb.list(`industries`, {
      query: {
        orderByChild: 'name',
        startAt: this.sortSubject.next
      }
    });
    }

}




