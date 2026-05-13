import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CriarUsuario } from './criar-usuario/criar-usuario';

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
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages/login',
  },
];
