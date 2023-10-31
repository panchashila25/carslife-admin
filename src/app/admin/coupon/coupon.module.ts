import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CouponComponent,
    AddCouponComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule,
    FormsModule,
    
  ]
})
export class CouponModule { }
