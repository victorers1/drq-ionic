import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { HomePage } from './pessoa-juridica.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: drqRoutes.AGENDAR,
    loadChildren: () =>
      import('../agendar/agendar.module').then((m) => m.AgendarPageModule),
  },
  {
    path: drqRoutes.AGENDA,
    loadChildren: () =>
      import('../list-agenda/list-agenda.module').then(
        (m) => m.ListAgendaPageModule
      ),
  },
  {
    path: drqRoutes.EDIT_DADOS_CONTA,
    loadChildren: () =>
      import('../edit-dados-conta/dados-conta.module').then(
        (m) => m.DadosContaPageModule
      ),
  },
  {
    path: drqRoutes.LIST_REQUISICOES_DADOS,
    loadChildren: () =>
      import('../list-requisicoes-dado/requisicoes.module').then(
        (m) => m.RequisicoesPageModule
      ),
  },
  {
    path: drqRoutes.LIST_EXPEDIENTES,
    loadChildren: () =>
      import('../list-expedientes/list-expedientes.module').then(
        (m) => m.ListExpedientesPageModule
      ),
  },
  {
    path: drqRoutes.LIST_UNIDADES,
    loadChildren: () =>
      import('../list-unidades/list-unidades.module').then(
        (m) => m.ListUnidadesPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
