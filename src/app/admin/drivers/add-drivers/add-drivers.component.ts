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
  Address:any="";
  address:any="";
  LicenseNo:any="";
  LicenseDocument:any="";
  GovernmentID:any="";
  Age:any="";
  CarDocument:any="";
  Carname:any="";
  CarNo:any="";
  CarDoc:any="";
  
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    
  }

}
