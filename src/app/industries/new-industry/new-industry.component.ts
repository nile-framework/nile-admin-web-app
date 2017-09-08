import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-industry',
  templateUrl: './new-industry.component.html',
  styleUrls: ['./new-industry.component.css']
})
export class NewIndustryComponent {

  form: FormGroup;

  constructor(
    public dialogRef: MdDialogRef<NewIndustryComponent>,
    private _fb: FormBuilder
  ) {
    this.buildForm();
  }
  
  // we build the form in a separate function, this helps keep the constructor clean.
  buildForm() {
    this.form = this._fb.group({
      name: ['', Validators.required]
    });
  }


  // we exit the dialog if the user clicks anywhere outside of the dialog.
  onNoClick(): void {
    this.dialogRef.close();
  }

}
