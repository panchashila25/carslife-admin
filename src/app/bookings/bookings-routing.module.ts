import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { BookingDeatilsComponent } from './booking-deatils/booking-deatils.component';

const routes: Routes = [
  {
    path:"",
    component:BookingsComponent
  },
  {
    path:"booking-details",
    component:BookingDeatilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
