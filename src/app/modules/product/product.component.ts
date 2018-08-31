import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public btnTitle: string;
  public columns: Array<any> = [];
  public formProduct: FormGroup;
  public dataProduct: any;
  public modalRef: BsModalRef;
  public rows = new Array<any>();

  constructor(
    private formBuilder: FormBuilder,
    private modalSvc: BsModalService,
    private productSvc: ProductService
  ) { }

  initFormProduct() {
    if (this.dataProduct) {
      this.btnTitle = 'Ubah';
      this.formProduct = this.formBuilder.group({
        name: [this.dataProduct.name, Validators.required],
        price: [this.dataProduct.price, Validators.required],
        weight: [this.dataProduct.weight, Validators.required]
      });
    } else {
      this.btnTitle = 'Tambah';
      this.formProduct = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        weight: ['', Validators.required]
      });
    }
  }

  initGetRows() {
    this.productSvc.read().subscribe(response => {
      const products = response;
      products.forEach(product => {
        product.action = {
          edit: true,
          detail: false,
          delete: true
        };
      });
      this.rows = products;
    });
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
      },
      {
        name: 'Harga',
        prop: 'price'
      },
      {
        name: 'Berat',
        prop: 'weight'
      }
    ];
   }


  ngOnInit() {
    this.initFormProduct();
    this.initGetRows();
    this.initSetColumns();
  }

  onBtnUpdateClick($event) {

  }

  onBtnViewClick($event) {

  }

  onBtnDeleteClick($event) {

  }

  onFormProductSubmit(product) {
    console.log(product);
    product.action = {
      edit: true,
      detail: false,
      delete: true
    };
    this.rows.unshift(product);
    this.rows = [...this.rows];

    this.formProduct.reset();
  }

}
