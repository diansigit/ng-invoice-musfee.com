import { Routes, RouterModule } from '@angular/router';
import { ROLE } from '../../app.constant';
import { ReportComponent } from './report.component';

const routes: Routes = [{
  path: 'report',
  component: ReportComponent,
  data: {
    roles: [
      ROLE.ADMIN,
      ROLE.OWNER
    ]
  }
}];
export const ReportRoutes = RouterModule.forChild(routes);
