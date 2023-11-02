import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { BookingDeatilsComponent } from './booking-deatils/booking-deatils.component';


@NgModule({
  declarations: [
    BookingsComponent,
    BookingDeatilsComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule
  ]
})
export class BookingsModule { }
