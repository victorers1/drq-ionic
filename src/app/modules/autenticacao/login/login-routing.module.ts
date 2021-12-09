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
  {
    path: drqRoutes.CADASTRO_PESSOA_FISICA,
    loadChildren: () =>
      import(
        '../cadastro-pessoa-fisica/cadastro-pessoa-fisica-routing.module'
      ).then((m) => m.CadastroPessoaFisicaPageRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
