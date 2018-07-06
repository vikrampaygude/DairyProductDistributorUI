import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DistributorComponent } from './distributor/distributor.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { DistributorDialogComponent } from './distributor/distributor-dialog.component';
import { DistributorAreaComponent } from './distributor-area/distributor-area.component';
import { DistributorAreaDialogComponent } from './distributor-area/distributor-area-dialog.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductBrandDialogComponent } from './product-brand/product-brand-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DistributorComponent,
    DistributorDialogComponent,
    DistributorAreaComponent,
    DistributorAreaDialogComponent,
    ProductBrandComponent,
    ProductBrandDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
