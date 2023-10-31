import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
   list:any=[];
   routesData:any=[];
  constructor(public api:ApiService,public route:Router,public routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.queryParams.subscribe((data:any)=>{
     console.log(data)
      this.routesData=JSON.parse(data.data)
    })


this.api.getAllDrivers({}).subscribe((cdata)=>{
  this.list=cdata.data
  console.log(this.list)

})
  }

}
