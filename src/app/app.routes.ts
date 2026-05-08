import { Routes } from '@angular/router';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path: 'pages/login',
    component: Login,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages/login',
  },
];
