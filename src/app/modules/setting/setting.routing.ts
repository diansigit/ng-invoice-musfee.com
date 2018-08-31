import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';

const routes: Routes = [{
  path: 'setting',
  component: SettingComponent
 }];

export const SettingRoutes = RouterModule.forChild(routes);
