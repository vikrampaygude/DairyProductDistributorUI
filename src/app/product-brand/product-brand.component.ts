import { Component, OnInit } from '@angular/core';
import {ProductBrand} from './product-brand';
import {ProductBrandService} from './product-brand.service';

@Component({
  selector: 'app-productBrand-area',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {
  
  productBrands : ProductBrand[];

  model = new ProductBrand(0,null);

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log("On submit "+this.submitted);
    this.service.getAllProductBrands().subscribe(productBrands => this.productBrands = productBrands);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(public service : ProductBrandService) { 
  }

  newProductBrand(){
    this.model = new ProductBrand(0,null);
  }

  ngOnInit() {
    this.service.getAllProductBrands().subscribe(productBrands => {this.productBrands = productBrands; console.log(this.productBrands);} );
   }

}
