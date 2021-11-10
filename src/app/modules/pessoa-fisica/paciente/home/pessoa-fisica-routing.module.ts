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
    path: drqRoutes.AGENDAR,
    loadChildren: () =>
      import('../agendar/agendar.module').then((m) => m.AgendarPageModule),
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
  {
    path: drqRoutes.LIST_RECEITAS,
    loadChildren: () =>
      import('../../../shared/list-receita/list-receita.module').then(
        (m) => m.ListReceitaPageModule
      ),
  },
  {
    path: drqRoutes.LIST_ATESTADOS,
    loadChildren: () =>
      import('../../../shared/list-atestado/list-atestado.module').then(
        (m) => m.ListAtestadoPageModule
      ),
  },
  {
    path: drqRoutes.LIST_PRONTUARIOS,
    loadChildren: () =>
      import('../../../shared/list-prontuario/list-prontuario.module').then(
        (m) => m.ListProntuarioPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaFisicaPageRoutingModule {}
