import { Component, OnInit } from '@angular/core';
import {ProductQuantityPrice} from './product-quantity-price';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductQuantityPriceService } from './product-quantity-price.service';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-quantity-price-dialog',
  templateUrl: './product-quantity-price-dialog.component.html',
  styleUrls: ['./product-quantity-price.component.css']
})
export class ProductQuantityPriceDialogComponent implements OnInit {

  model = new ProductQuantityPrice(0,0,0,0,0,null);
  product : Product;

  onSubmit() { 
    this.model.productId = this.product.id;
    this.service.save(this.model).subscribe(val => this.router.navigate(['/product/'+this.product.id+'/quantity-price']));
  }

  constructor(public service : ProductQuantityPriceService,
    public router : Router,
    private route: ActivatedRoute,
    public productService: ProductService) { 

    this.product = Product.getEmptyObject();
    // if id is present then its edit 
    if(this.route.snapshot.params.id)
      service.getById(this.route.snapshot.params.id).subscribe(obj => this.model = obj);

    //get the product object
    productService.getById(this.route.snapshot.params.productId).subscribe(obj => this.product = obj);
  }

  ngOnInit() {}

}
