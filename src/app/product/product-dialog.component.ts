import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductBrand } from '../product-brand/product-brand';
import { ProductBrandService } from '../product-brand/product-brand.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductDialogComponent implements OnInit {
  productBrands : ProductBrand[];

  model = new Product(0,null,null,null,0,0);
  

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log("onSubmit "+this.model.name);
    this.service.save(this.model).subscribe(val => this.router.navigate(['/products']));
    
  }

  constructor(public service : ProductService, public router : Router, private route: ActivatedRoute,
    public productBrandService : ProductBrandService) { 
      if(this.route.snapshot.params.id)
        service.getById(this.route.snapshot.params.id).subscribe(obj => this.model = obj);
      this.productBrandService.getAllProductBrands().subscribe(productBrands => this.productBrands = productBrands );
  }

  ngOnInit() { }

}
