import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { LoginPage } from './login.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: drqRoutes.SELECT_TIPO_USUARIO,
    loadChildren: () =>
      import('../select-tipo-usuario/select-tipo-usuario.module').then(
        (m) => m.SelectTipoUsuarioPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
