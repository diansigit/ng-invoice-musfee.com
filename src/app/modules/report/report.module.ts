import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ReportComponent } from './report.component';
import { ReportRoutes } from './report.routing';

@NgModule({
  imports: [
    ReportRoutes,
    SharedModule
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
