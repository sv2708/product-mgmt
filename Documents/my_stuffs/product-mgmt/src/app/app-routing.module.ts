import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { ProductsComponent } from './products/products.component';
import { SupplyLandComponent } from './supplies/supply-land/supply-land.component';
import { SupplyAddComponent } from './supplies/supply-add/supply-add.component';
import { SupplyViewComponent } from './supplies/supply-view/supply-view.component';
import { ProductLandComponent } from './products/product-land/product-land.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductViewComponent } from './products/product-view/product-view.component';


const routes: Routes = [

  {
    path: '', component: LandingComponent
  },
  {
    path: 'supplies', component: SuppliesComponent,
    children: [
      {
        path: '', component: SupplyLandComponent
      },
      {
        path: 'add', component: SupplyAddComponent
      },
      {
        path: 'view', component: SupplyViewComponent
      },
    ]
  },
  {
    path: 'vendors', component: VendorsComponent
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      {
        path: '', component: ProductLandComponent
      },
      {
        path: 'add', component: ProductAddComponent
      },
      {
      path: 'view', component: ProductViewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
