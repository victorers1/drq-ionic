import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { ConfigDadosPage } from './config-dados.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: ConfigDadosPage,
  },
  {
    path: drqRoutes.EDIT_DADOS_CONTA,
    loadChildren: () =>
      import('../edit-dados-conta/dados-conta.module').then(
        (m) => m.DadosContaPageModule
      ),
  },
  {
    path: drqRoutes.EDIT_DADOS_PROFISSIONAIS,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../edit-dados-profissionais/dados-profissionais.module').then(
            (m) => m.DadosProfissionaisPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigDadosPageRoutingModule {}
