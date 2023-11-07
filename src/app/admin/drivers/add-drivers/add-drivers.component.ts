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
  Name:any ="";
  LastName:any="";
  EmailId:any="";
  PhoneNumber:any="";
  Age:any="";
  Gender:any="";
  AadharCardNo:any="";
  LicenseNo:any="";
  LicenseDocument:any="";
  PoliceVerifyDocument:any="";
  ModelName:any="";
  CarDocument:any="";
  CarPhoto:any="";
  BrandName:any="";
  PurchaesYear:any="";
  PackagePrice:any="";
  PackageKm:any="";
  RatePerKm:any="";
  RCNo:any="";
  PermantAddress:any="";
  City:any="";
  State:any="";
  PinCode:any="";
  DOB:any="";
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
            this.Name=cdata.data[0].name;
            this.EmailId=cdata.data[0].email;
            this.PhoneNumber=cdata.data[0].mobile;
            this.AadharCardNo=cdata.data[0].aadharCardNo;
            this.Age=cdata.data[0].age;
            this.LicenseNo=cdata.data[0].licenseno;
            this.LicenseDocument=cdata.data[0].licenseDoc;
            this.PoliceVerifyDocument=cdata.data[0].policeVerifyDoc;
            this.ModelName=cdata.data[0].modelName;
            this.CarPhoto=cdata.data[0].photo;
            this.BrandName=cdata.data[0].brandName;
            this.CarDocument=cdata.data[0].carDocument;
            this.PurchaesYear=cdata.data[0].purchesYear;
            this.PackagePrice=cdata.data[0].packagePrice;
            this.PackageKm=cdata.data[0].packageKm;
            this.RatePerKm=cdata.data[0].ratePerKm;
            this.PermantAddress=cdata.data[0].address;
            this.City=cdata.data[0].city;
            this.State=cdata.data[0].state;
            this.PinCode=cdata.data[0].pinCode;
            this.DOB=cdata.data[0].dob;
            this.Gender=cdata.data[0].gender;
          })
          console.log(fData)
        })
      }
    })
  }

  submit(){
    if(this.action == 'create'){
      this.createDriver();
    }else{
      this.editData();
    }

    
  }
  createDriver(){
    const data=JSON.stringify({
      name:this.Name,
      email:this.EmailId,
      mobile:this.PhoneNumber,
      age:this.Age,
      aadharCardNo:this.AadharCardNo,
      licenseno:this.LicenseNo,
      licenseDoc:this.LicenseDocument,
      policeVerifyDoc:this.PoliceVerifyDocument,
      modelName:this.ModelName,
      photo:this.CarPhoto,
      carDocument:this.CarDocument,
      brandName:this.BrandName,
      purchesYear:this.PurchaesYear,
      packagePrice:this.PackagePrice,
      packageKm:this.PackageKm,
      ratePerKm:this.RatePerKm,
      carNo:this.RCNo,
      address:this.PermantAddress,
      city:this.City,
      state:this.State,
      dob:this.DOB,
      pincode:this.PinCode,
      gender:this.Gender

    })
    console.log(data)
    this.api.createDriver(data).subscribe((cdata)=>{
        console.log(cdata)
        this.route.navigate(['/admin/drivers'])

    })
    

  }
  editData(){
    const data=JSON.stringify({
      name:this.Name,
      email:this.EmailId,
      mobile:this.PhoneNumber,
      age:this.Age,
      aadharCardNo:this.AadharCardNo,
      licenseno:this.LicenseNo,
      licenseDoc:this.LicenseDocument,
      policeVerifyDoc:this.PoliceVerifyDocument,
      modelName:this.ModelName,
      photo:this.CarPhoto,
      carDocument:this.CarDocument,
      brandName:this.BrandName,
      purchesYear:this.PurchaesYear,
      packagePrice:this.PackagePrice,
      packageKm:this.PackageKm,
      ratePerKm:this.RatePerKm,
      carNo:this.RCNo,
      address:this.PermantAddress,
      city:this.City,
      state:this.State,
      dob:this.DOB,
      pincode:this.PinCode,
      gender:this.Gender

    })
    this.api.updateDriver(this.id,data).subscribe((cdata)=>{
      console.log(cdata)
      this.route.navigate(['/admin/drivers'])
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
  uploadCarphoto(event:any){
    let fileData: FormData = new FormData();
    fileData.append('file', event.target.files[0]);
      this.api.onupload(fileData).subscribe((cData: any) => {
        console.log(cData)
        this.CarPhoto = cData.data.url;
  
        setTimeout(() => {
          this.personalDocChild.nativeElement.value = "";
        }, 3000);
      });

  }
  calculateAge() {
    if (this.DOB) {
      const today = new Date();
      const birthDate = new Date(this.DOB);
      const ageDiff = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        this.Age = ageDiff - 1;
      } else {
        this.Age = ageDiff;
      }
    }
  }
  
}



