import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MdDialog } from '@angular/material';
import { MdSnackBar } from '@angular/material';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { NewIndustryComponent } from '../new-industry/new-industry.component';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';
import { IndustriesService } from '../industries.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  form: FormGroup;

  industries;
  startAt = new Subject();
  endAt = new Subject();

  constructor(
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    private _afDb: AngularFireDatabase,
    private _router: Router,
    private _route: ActivatedRoute,
    public industriesSvc: IndustriesService,
    private _fb: FormBuilder
  ) {
    this.buildForm();
    
  }


  // this is a lifecycle function, it runs when the component has been initialized.
  ngOnInit() {
    this.industriesSvc.getIndustries(this.startAt, this.endAt).subscribe( industries => {
      this.industries = industries;
    });
    this.initialQuery();
  }






  buildForm()
  {
    this.form = this._fb.group({
      searchValue: ['']
    })
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
  writeToDataBase(industryName: string): firebase.Promise<any> {
    return this._afDb.list(`industries`).push({
    name: industryName,
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

  search($event) {
    let searchValue = $event.target.value
    this.startAt.next(searchValue);
    this.endAt.next(searchValue + '\uf8ff');
  }

  initialQuery() {
    this.startAt.next('');
    this.endAt.next(''+'\uf8ff');
  }

}



