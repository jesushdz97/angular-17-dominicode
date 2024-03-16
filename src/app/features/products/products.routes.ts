import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/products/products.component')
  },
  {
    path: ':id',
    loadComponent: () => import('@features/products/details/details.component'),
  },
];

export default routes;