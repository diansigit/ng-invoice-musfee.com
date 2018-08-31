import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: 'product',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: 'setting',
    redirectTo: '/setting',
    pathMatch: 'full'
  },
  {
    path: 'report',
    redirectTo: '/report',
    pathMatch: 'full'
  },
  {
    path: 'invoice',
    redirectTo: '/invoice',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
