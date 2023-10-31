import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path:"bookings",
    loadChildren:() => import('./bookings/bookings.module'). then(m => m.BookingsModule)
  },
  {
    path:"coupon",
    loadChildren:() => import('./coupon/coupon.module'). then(m => m.CouponModule) 
   },
   {
    path:'dashboard',
    loadChildren:() => import('./dashboard/dashboard.module'). then(m=> m.DashboardModule)
   },
   {
    path:'drivers',
    loadChildren:() => import('./drivers/drivers.module'). then(m => m.DriversModule)
   },
   {
    path:'users',
    loadChildren:() => import('./users/users.module'). then(m => m.UsersModule)
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
