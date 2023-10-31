import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-deatils',
  templateUrl: './driver-deatils.component.html',
  styleUrls: ['./driver-deatils.component.scss']
})
export class DriverDeatilsComponent implements OnInit {
  itemid:any='';
  finaldata:any=[];
  orders=0;
  dealersname:any=""
  constructor() { }

  ngOnInit(): void {
  }

}
