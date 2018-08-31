import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SettingComponent } from './setting.component';
import { SettingRoutes } from './setting.routing';
import { SettingCourierComponent } from './setting-courier/setting-courier.component';
import { SettingInvoiceComponent } from './setting-invoice/setting-invoice.component';
import { SettingPaymentComponent } from './setting-payment/setting-payment.component';

@NgModule({
  imports: [
    SettingRoutes,
    SharedModule
  ],
  declarations: [
    SettingComponent,
    SettingCourierComponent,
    SettingInvoiceComponent,
    SettingPaymentComponent
  ]
})
export class SettingModule { }
