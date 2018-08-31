import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting-courier',
  templateUrl: './setting-courier.component.html',
  styleUrls: ['./setting-courier.component.scss']
})
export class SettingCourierComponent implements OnInit {

  public columns: Array<any> = [];
  public formCourier: FormGroup;
  public rows = new Array<any>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  initFormCourier() {
    this.formCourier = this.formBuilder.group({
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
    this.initFormCourier();
    this.initGetRows();
    this.initSetColumns();
  }

  onBtnUpdateClick($event) {
    console.log($event);
  }

  onBtnDeleteClick($event) {
    console.log($event);
  }

  onFormCourierSubmit(value) {
    value.action = {
      edit: true,
      detail: false,
      delete: true
    };
    this.rows.unshift(value);
    this.rows = [...this.rows];

    this.formCourier.reset();
  }

}
