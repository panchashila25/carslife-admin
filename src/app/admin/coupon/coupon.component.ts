import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  contactsForm: any;
  CustomersData: any;
  modalService: any;
  submitted: boolean | undefined;

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
 

}
