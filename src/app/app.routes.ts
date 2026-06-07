import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CriarUsuario } from './criar-usuario/criar-usuario';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'pages/login',
    component: Login,
  },
  {
    path: 'pages/criar-usuario',
    component: CriarUsuario,
  },
  {
    path: 'admin/dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages/login',
  },
];
