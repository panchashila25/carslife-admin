import { DashboardRoutingModule } from './../dashboard/dashboard-routing.module';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  couponCode:any="";
  couponName:any="";
  discount:any="";
fromDate:any
toDate:any
date:any
list:any=[]
id:any
action="create";
  constructor(public route:Router, public modal:NgbModal,public api:ApiService,public datePipe:DatePipe,public routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.fromDate= this.datePipe.transform(new Date(),'yyyy-MM-dd');
    this.toDate=this.datePipe.transform(new Date(),'yyyy-mm-dd');
  this.getData();

  }
 

  openModal(content:any,item:any){
    if(item != ''){
      this.id = item._id;
      this.couponCode=item.couponCode;
      this.couponName=item.couponName;
      this.discount=item.discount;
    this.fromDate=this.datePipe.transform(item.fromDate,'yyyy-MM-dd');
    this.toDate=this.datePipe.transform(item.toDate,'yyyy-MM-dd');
    }
    this.modal.open(content,{centered: true, size:'md'})
  }
  createCoupon(){
    if(this.id != ''){
      const data=JSON.stringify({
        couponCode:this.couponCode,
        couponName:this.couponName,
        discount:this.discount,
        fromDate:this.fromDate,
        toDate:this.toDate
      })
      this.api.updateCoupon(this.id,data).subscribe((cdata:any)=>{
        console.log(cdata)
        this.getData()
        this.modal.dismissAll()
  
      })
    }else{
      const data=JSON.stringify({
        couponCode:this.couponCode,
        couponName:this.couponName,
        discount:this.discount,
        fromDate:this.fromDate,
        toDate:this.toDate
      })
      console.log(data)
      this.api.createCoupon(data).subscribe((cdata:any)=>{
        console.log(cdata)
        this.getData()
       this.modal.dismissAll()
  
      })
    }
    
  }

  getData(){
    this.api.getAllCoupon({}).subscribe((cdata:any)=>{
   this.list=cdata.data;
   console.log(this.list)
    })
  }


  removeCoupon(data_id:any){
    this.api.deleteCoupon(data_id).subscribe((cdata:any)=>{
      console.log(cdata)
        this.getData()
    })

  }

}
