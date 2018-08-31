import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceComponent } from './invoice.component';
import { InvoiceRoutes } from './invoice.routing';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';

@NgModule({
  imports: [
    InvoiceRoutes,
    SharedModule
  ],
  declarations: [
    InvoiceComponent,
    InvoiceFormComponent
  ]
})
export class InvoiceModule { }
