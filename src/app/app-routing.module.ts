import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorComponent } from './distributor/distributor.component';
import { DistributorDialogComponent } from './distributor/distributor-dialog.component';
import { DistributorAreaComponent } from './distributor-area/distributor-area.component';
import { DistributorAreaDialogComponent } from './distributor-area/distributor-area-dialog.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductBrandDialogComponent } from './product-brand/product-brand-dialog.component';


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
  { path: 'product-brand/edit/:id', component: ProductBrandDialogComponent}

  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
