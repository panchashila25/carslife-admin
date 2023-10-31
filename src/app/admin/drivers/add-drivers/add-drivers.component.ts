import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.scss']
})
export class AddDriversComponent implements OnInit {
  name:any ="";
  email:any="";
  password:any="";
  mobile:any="";
  status:any = "";
  BillingAddress:any="";
  CompanyName:any="";
  Billingcity:any="";
  BillingZipcode:any="";
  BillingState:any="";
  ShippingAddress:any="";
  ShippingCity:any="";
  ShippingState:any="";
  ShippingZipcode:any="";
  id:any = "";
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    
  }

}
