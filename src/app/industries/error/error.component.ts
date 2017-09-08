import { Component, Inject, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<ErrorComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { 
  }

  ngOnInit() {
  }

}
