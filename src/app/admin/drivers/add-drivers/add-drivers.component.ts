import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

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
  carCategory:any=""
  
  constructor(public api:ApiService,public route:Router) { }

  ngOnInit(): void {
  }
  submit(){
  
    const data=JSON.stringify({
      name:this.name,
      mobile:this.mobile,
      email:this.email,
      password:this.password,
      carCategory:this.carCategory,
      age:this.Age,
      licenseno:this.LicenseNo,
      licenseDoc:this.LicenseDocument,
      address:this.Address,
      govId:this.GovernmentID,
      carName:this.Carname,
      carNo:this.CarNo,
      carDoc:this.CarDoc

    })
    this.api.createDriver(data).subscribe((cdata)=>{
        console.log(cdata)

    })
    this.route.navigate(['/admin/drivers'],{
      queryParams:{data:data}
    })

  }

}
