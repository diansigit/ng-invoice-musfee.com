import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting-payment',
  templateUrl: './setting-payment.component.html',
  styleUrls: ['./setting-payment.component.scss']
})
export class SettingPaymentComponent implements OnInit {

  public columns: Array<any> = [];
  public formPayment: FormGroup;
  public rows = new Array<any>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  initFormPayment() {
    this.formPayment = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  initGetRows() {
    // this.productSvc.read().subscribe(response => {
    //   const products = response;
    //   products.forEach(product => {
    //     product.action = {
    //       edit: true,
    //       detail: false,
    //       delete: true
    //     };
    //   });
    //   this.rows = products;
    // });
  }

  initSetColumns() {
    this.columns = [
      {
        name: 'No.',
        type: 'number'
      },
      {
        name: 'Nama',
        prop: 'name'
      }
    ];
 }


  ngOnInit() {
    this.initFormPayment();
    this.initGetRows();
    this.initSetColumns();
  }

  onBtnUpdateClick($event) {
    console.log($event);
  }

  onBtnDeleteClick($event) {
    console.log($event);
  }

  onFormPaymentSubmit(value) {
    value.action = {
      edit: true,
      detail: false,
      delete: true
    };
    this.rows.unshift(value);
    this.rows = [...this.rows];

    this.formPayment.reset();
  }
}
