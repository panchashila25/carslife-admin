import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss']
})
export class AddCouponComponent implements OnInit {
  contactsForm: any;
  submitted: boolean | undefined;
  modalService: any;
  CustomersData: any;

  constructor() { }

  ngOnInit(): void {
  }
  get form() {
    return this.contactsForm.controls;
  }
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }
  saveUser() {
    if (this.contactsForm.valid) {
      const name = this.contactsForm.get('name')?.value;
      const company = this.contactsForm.get('company_name')?.value;
      const email = this.contactsForm.get('email')?.value;
      const phone = this.contactsForm.get('phone')?.value;
      const score = this.contactsForm.get('lead_score')?.value;
      const date = "20 Sep, 2021";
      const time = "07:55AM";
      this.CustomersData.push({
        name,
        company,
        email,
        phone,
        score,
        date,
        time
      });
      this.modalService.dismissAll()
    }
    this.submitted = true
  }

}
