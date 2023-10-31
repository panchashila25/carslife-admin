import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { DriverDeatilsComponent } from './driver-deatils/driver-deatils.component';

const routes: Routes = [ 
{
  path:'',
  component:DriversComponent
},
{
  path:'add-drivers/:action',
  component:AddDriversComponent
},
{
  path:'drivers-deatils',
  component:DriverDeatilsComponent
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
