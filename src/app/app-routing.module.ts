import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorComponent } from './distributor/distributor.component';
import { DistributorDialogComponent } from './distributor/distributor-dialog.component';
import { DistributorAreaComponent } from './distributor-area/distributor-area.component';
import { DistributorAreaDialogComponent } from './distributor-area/distributor-area-dialog.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductBrandDialogComponent } from './product-brand/product-brand-dialog.component';
import { ProductComponent } from './product/product.component';
import { ProductDialogComponent } from './product/product-dialog.component';
import { ProductQuanityPriceComponent } from './product-quantity-price/product-quantity-price.component';
import { ProductQuantityPriceDialogComponent } from './product-quantity-price/product-quantity-price-dialog.component';
import { ShopkeeperComponent } from './shopkeeper/shopkeeper.component';
import { ShopkeeperDialogComponent } from './shopkeeper/shopkeeper-dialog.component';


const routes: Routes = [
  //distributor
  { path: 'distributors', component: DistributorComponent },
  { path: 'distributor/new', component: DistributorDialogComponent},
  { path: 'distributor/edit/:id', component: DistributorDialogComponent},
  //distributor-area
  { path: 'distributor-areas', component: DistributorAreaComponent },
  { path: 'distributor-area/new', component: DistributorAreaDialogComponent},
  { path: 'distributor-area/edit/:id', component: DistributorAreaDialogComponent},
  //product-brand
  { path: 'product-brands', component: ProductBrandComponent },
  { path: 'product-brand/new', component: ProductBrandDialogComponent},
  { path: 'product-brand/edit/:id', component: ProductBrandDialogComponent},
  //product
  { path: 'products', component: ProductComponent },
  { path: 'product/new', component: ProductDialogComponent},
  { path: 'product/edit/:id', component: ProductDialogComponent},
  //product-quantity-price
  { path: 'product/:productId/quantity-price', component: ProductQuanityPriceComponent },
  { path: 'product/:productId/quantity-price/new', component: ProductQuantityPriceDialogComponent},
  { path: 'product/:productId/quantity-price/edit/:id', component: ProductQuantityPriceDialogComponent},
  //shopkeepers
  { path: 'shopkeepers', component: ShopkeeperComponent },
  { path: 'shopkeeper/new', component: ShopkeeperDialogComponent},
  { path: 'shopkeeper/edit/:id', component: ShopkeeperDialogComponent},

  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
