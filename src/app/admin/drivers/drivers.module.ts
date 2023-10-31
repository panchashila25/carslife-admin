import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { DriversComponent } from './drivers.component';
import { FormsModule } from '@angular/forms';
import { DriverDeatilsComponent } from './driver-deatils/driver-deatils.component';


@NgModule({
  declarations: [
    AddDriversComponent,
    DriversComponent,
    DriverDeatilsComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    FormsModule
  ]
})
export class DriversModule { }
