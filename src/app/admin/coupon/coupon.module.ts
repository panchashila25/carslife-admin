import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';


@NgModule({
  declarations: [
    CouponComponent,
    AddCouponComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule,
  ]
})
export class CouponModule { }
