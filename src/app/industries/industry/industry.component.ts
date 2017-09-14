import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  industryId: any;

  constructor(
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.params.subscribe( params => {
      // this.name = params['industryId'];
      console.dir(params);
      console.log('industry id is: ' + params.industryId);
      this.industryId = params.industryId;
    })
  }

}
// this.sub = this.route.params.subscribe(params => {
//   this.id = +params['id']; // (+) converts string 'id' to a number

//   // In a real app: dispatch action to load the details here.
// });