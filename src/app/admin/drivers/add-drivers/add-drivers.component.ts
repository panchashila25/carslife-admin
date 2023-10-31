import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.scss']
})
export class AddDriversComponent implements OnInit {

  @ViewChild('carDocChild') carDocChild !:ElementRef;
  @ViewChild('personalDocChild') personalDocChild !:ElementRef;
  name:any ="";
  email:any="";
  password:any="";
  mobile:any="";
  Address:any="";
  LicenseNo:any="";
  LicenseDocument:any="";
  GovernmentID:any="";
  Age:any="";
  CarDocument:any="";
  Carname:any="";
  CarNo:any="";
  CarDoc:any="";
  carCategory:any="";
  action='create';
  id:any='';
  
  constructor(public api:ApiService,public route:Router,public routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe((pData:any)=>{
      
      if(pData.action =='create'){
        this.action='create'
      }
      else{
        this.action='edit'
        this.routes.queryParams.subscribe((fData:any)=>{
          this.id=fData.id;
          this.api.getAllDrivers({_id:fData.id}).subscribe((cdata:any)=>{
console.log(cdata)
            this.name=cdata.data[0].name;
            this.mobile=cdata.data[0].mobile;
            this.email=cdata.data[0].email;
            this.password=cdata.data[0].password
            this.carCategory=cdata.data[0].carCategory;
            this.Age=cdata.data[0].age;
            this.LicenseNo=cdata.data[0].licenseno;
            this.LicenseDocument=cdata.data[0].licenseDoc
            this.Address=cdata.data[0].address;
            this.GovernmentID=cdata.data[0].govId;
            this.Carname=cdata.data[0].carName;
            this.CarNo=cdata.data[0].carNo;
            this.CarDoc=cdata.data[0].carDoc;
          })
          console.log(fData)
        })
      }
    })
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
      address:this.Address,
      govId:this.GovernmentID,
      carName:this.Carname,
      carNo:this.CarNo,
      carDocument:this.CarDocument,
      personalDocument:this.LicenseDocument

    })
    this.api.createDriver(data).subscribe((cdata)=>{
        console.log(cdata)

    })
    this.route.navigate(['/admin/drivers'],{
      queryParams:{data:data}
    })

  }
  editData(){
    const data=JSON.stringify({
      name:this.name,
      mobile:this.mobile,
      email:this.email,
      password:this.password,
      carCategory:this.carCategory,
      age:this.Age,
      licenseno:this.LicenseNo,
      address:this.Address,
      govId:this.GovernmentID,
      carName:this.Carname,
      carNo:this.CarNo,
      carDocument:this.CarDocument,
      personalDocument:this.LicenseDocument

    })
    this.api.updateDriver(this.id,data).subscribe((cdata)=>{
      console.log(cdata)

    })
    

  }

  uploadCarDoc(event:any){
      let fileData: FormData = new FormData();
      fileData.append('file', event.target.files[0]);
      this.api.onupload(fileData).subscribe((cData: any) => {
        console.log(cData)
        this.CarDocument = cData.data.url;
  
        setTimeout(() => {
          this.carDocChild.nativeElement.value = "";
        }, 3000);
      });
  }
  uploadLicDoc(event:any){
    let fileData: FormData = new FormData();
      fileData.append('file', event.target.files[0]);
      this.api.onupload(fileData).subscribe((cData: any) => {
        console.log(cData)
        this.LicenseDocument = cData.data.url;
  
        setTimeout(() => {
          this.personalDocChild.nativeElement.value = "";
        }, 3000);
      });
  }

}
