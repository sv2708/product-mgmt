import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { ProductsComponent } from './products/products.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SupplyLandComponent } from './supplies/supply-land/supply-land.component';
import { SupplyAddComponent } from './supplies/supply-add/supply-add.component';
import { SupplyViewComponent } from './supplies/supply-view/supply-view.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import {AddDialogComponent} from './add-dialog/add-dialog.component';
import { ProductLandComponent } from './products/product-land/product-land.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { VendorAddComponent } from './vendors/vendor-add/vendor-add.component';
import { VendorViewComponent } from './vendors/vendor-view/vendor-view.component';
import { VendorUpdateComponent } from './vendors/vendor-update/vendor-update.component';
import { VendorLandComponent } from './vendors/vendor-land/vendor-land.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SuppliesComponent,
    ProductsComponent,
    VendorsComponent,
    SupplyLandComponent,
    SupplyAddComponent,
    SupplyViewComponent,
    AddDialogComponent,
    ProductLandComponent,
    ProductViewComponent,
    ProductAddComponent,
    DeleteDialogComponent,
    ProductUpdateComponent,
    VendorAddComponent,
    VendorViewComponent,
    VendorUpdateComponent,
    VendorLandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
  ],
  entryComponents: [AddDialogComponent, DeleteDialogComponent, ProductUpdateComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
