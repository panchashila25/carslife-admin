import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { DriversComponent } from './drivers.component';


@NgModule({
  declarations: [
    AddDriversComponent,
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule { }
