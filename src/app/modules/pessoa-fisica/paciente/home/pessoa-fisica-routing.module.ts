import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { PessoaFisicaPage } from './pessoa-fisica.page';

const drqRoutes = new DRQRoutes();
const routes: Routes = [
  {
    path: '',
    component: PessoaFisicaPage,
  },

  {
    path: drqRoutes.AGENDA,
    loadChildren: () =>
      import('../../shared/list-agenda/list-agenda.module').then(
        (m) => m.ListAgendaPageModule
      ),
  },
  {
    path: drqRoutes.CONFIG_DADOS,
    loadChildren: () =>
      import('../../shared/config-dados/config-dados.module').then(
        (m) => m.ConfigDadosPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaFisicaPageRoutingModule {}
