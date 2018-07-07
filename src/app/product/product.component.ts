import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products : Product[];

  model = new Product(0,null,null,null,null,0,0,null);

  submitted = false;


  onSubmit() { 
    this.submitted = true;
    console.log("On submit "+this.submitted);
    this.service.getAllProducts().subscribe(products => this.products = products);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(public service : ProductService) { 
  }

  newProduct(){
    this.model = new Product(0,null,null,null,null,0,0,null);
  }

  ngOnInit() {
    this.service.getAllProducts().subscribe(products => {this.products = products; console.log(this.products);} );
   }

}
