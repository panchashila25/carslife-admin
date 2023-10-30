import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';

const routes: Routes = [
  {
    path:"",
    component:CouponComponent
  },
  {
    path:'add-coupon',
    component:AddCouponComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
