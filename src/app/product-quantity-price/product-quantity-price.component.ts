import { Component, OnInit } from '@angular/core';
import {ProductQuantityPrice} from './product-quantity-price';
import {ProductQuantityPriceService} from './product-quantity-price.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-quantity-price',
  templateUrl: './product-quantity-price.component.html',
  styleUrls: ['./product-quantity-price.component.css']
})
export class ProductQuanityPriceComponent implements OnInit {
  
  productQuantityPrices : ProductQuantityPrice[];

  model = new ProductQuantityPrice(0,0,0,0,0,null);

  product : Product;



  onSubmit() { 
    this.service.getProductQuantityPrices(this.product.id).subscribe(productQuantityPrices => this.productQuantityPrices = productQuantityPrices);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  
  newProductQuanityPrice(){
    this.model = new ProductQuantityPrice(0,0,0,0,0,null);
  }

  constructor(public service : ProductQuantityPriceService, 
    public router : Router, 
    private route: ActivatedRoute,
    private productService: ProductService) { 
    //console.log(this.route.snapshot.params);
    this.product = new Product(0,'','','','',0,0,null);
 
    this.service.getProductQuantityPrices(this.route.snapshot.params.productId).subscribe(productQuantityPrices => {this.productQuantityPrices = productQuantityPrices; console.log(this.productQuantityPrices);} );
    this.productService.getById(this.route.snapshot.params.productId).subscribe(product => this.product = product );

  }

  ngOnInit() {
    // this.service.getProductQuantityPrices(1).subscribe(productQuantityPrices => {this.productQuantityPrices = productQuantityPrices; console.log(this.productQuantityPrices);} );
   }

}
