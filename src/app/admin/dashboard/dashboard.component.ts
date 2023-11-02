import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  day:any=""
  distance:any=""
  totalKm=300
  remainingKm:any=""
  totalAmount:any=""
  perKm_charge=10
  perDay_Km=100
  perDayCharge = 3000;

  constructor() { }

  ngOnInit(): void {
//one dat trip
    if(this.totalKm > 100){

          this.remainingKm=this.totalKm-this.perDay_Km;

         this.totalAmount=this.remainingKm*this.perKm_charge+this.perDayCharge;
         console.log(this.totalAmount)
         
    }else{
      this.totalAmount=this.perDayCharge;
         console.log(this.totalAmount)
    }


  }

}
