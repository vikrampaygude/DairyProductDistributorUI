import { Component, OnInit } from '@angular/core';
import {Dues} from './dues';
import {DuesService} from './dues.service';

@Component({
  selector: 'app-dues',
  templateUrl: './dues.component.html',
  styleUrls: ['./dues.component.css']
})
export class DuesComponent implements OnInit {
  
  duess : Dues[];

  model = new Dues();

  submitted = false;


  onSubmit() { 
    this.submitted = true;
    console.log("On submit "+this.submitted);
    this.service.getAllDuess().subscribe(duess => this.duess = duess);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(public service : DuesService) {
  }

  newDues(){
    this.model = new Dues();
  }

  ngOnInit() {
    this.service.getAllDuess().subscribe(duess => {this.duess = duess; console.log(this.duess);} );
   }

}
