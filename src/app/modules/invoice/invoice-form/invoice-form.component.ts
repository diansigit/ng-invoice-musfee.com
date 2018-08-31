import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  public dateValue: any;
  public courierOpts: Array<any>;
  public formInvoice: FormGroup;
  public invoiceTabs: Array<any>;
  public paymentOpts: Array<any>;

  private addTabButtonAdd() {
    this.invoiceTabs.push({
      id: 'tabAdd',
      title: '<span class="fa fa-plus"></span>',
      button: true
    });
  }

  private addTabInvoice(removable) {
    this.invoiceTabs.push({
      id: this.getTabsId(),
      title: this.getTabsNumber(),
      removable: removable
    });
  }

  private getTabsId(): string {
    return 'tab' + this.invoiceTabs.length;
  }

  private getTabsNumber(): string {
    const count = this.invoiceTabs.length + 1;
    return (count < 10) ? 'Inv#0' + count : 'Inv#' + count;
  }

  private initFormInvoice() {
    this.formInvoice = this.formBuilder.group({
      number: '',
      payment: '',
      date: new Date(),
      customer: '',
      phone: ''
    });
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // initialize default value
    this.courierOpts = [];
    this.dateValue = new Date();
    this.invoiceTabs = [];
    this.paymentOpts = [];

    this.addTabInvoice(false);
    this.addTabButtonAdd();
    this.initFormInvoice();

    this.courierOpts.push({
      label: 'JNE REG',
      value: 'JNE REG'
    }, {
      label: 'JNE YES',
      value: 'JNE YES'
    });

    this.paymentOpts.push({
      label: 'Tunai',
      value: 'Tunai'
    }, {
      label: 'Transfer',
      value: 'Transfer'
    });
  }

  onOptionsCourierSelected($event) {

  }

  onOptionsPaymentSelected($event) {

  }

  onTabSelect(data: TabDirective) {
    if (data.id === 'tabAdd') {
      if (this.invoiceTabs.length <= 10) {
        if (this.invoiceTabs.length > 1) {
          this.invoiceTabs.pop();
        }
        this.addTabInvoice(true);
        this.addTabButtonAdd();
        setTimeout(() => {
          this.staticTabs.tabs[this.invoiceTabs.length - 2].active = true;
        }, 100);
      }
    }
    console.log(data.id);
  }
}
