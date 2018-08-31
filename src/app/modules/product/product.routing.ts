import { Routes, RouterModule } from '@angular/router';
import { ROLE } from '../../app.constant';
import { ProductComponent } from './product.component';

const routes: Routes = [{
  path: 'product',
  component: ProductComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  }
}];

export const ProductRoutes = RouterModule.forChild(routes);
