import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';

const routes: Routes = [{
  path: 'invoice',
  component: InvoiceComponent,
}, {
  path: 'invoice/create',
  component: InvoiceFormComponent
}];

export const InvoiceRoutes = RouterModule.forChild(routes);
