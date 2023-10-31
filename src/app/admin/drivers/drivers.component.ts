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
this.api.getAllDrivers({}).subscribe((cdata)=>{
  this.list=cdata.data
  console.log(this.list)

})
  }
  editDriver(data_id:any){
    this.route.navigate(['/admin/drivers/add-drivers/edit'],{
      queryParams:{id:data_id}
    })

  }
  removeDriver(data_id:any){
    this.api.deleteDriver(data_id).subscribe((cdata:any)=>{
            this.list=cdata.data
    })
  }

}
