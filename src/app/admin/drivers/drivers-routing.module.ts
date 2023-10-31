import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { AddDriversComponent } from './add-drivers/add-drivers.component';

const routes: Routes = [ 
{
  path:'',
  component:DriversComponent
},
{
  path:'add-drivers',
  component:AddDriversComponent
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
