import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductRoutes } from './product.routing';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutes
  ],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule { }
