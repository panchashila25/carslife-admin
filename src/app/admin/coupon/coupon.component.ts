import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(public route:Router, public modal:NgbModal) { }

  ngOnInit(): void {
  }
 

  openModal(content:any){
    this.modal.open(content,{centered: true, size:'md'})
  }
}
