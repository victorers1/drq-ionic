import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { ListAgendaPage } from './list-agenda.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: ListAgendaPage,
  },
  {
    path: drqRoutes.EDIT_ATENDIMENTO, // SHARED PAGE
    loadChildren: () =>
      import('../../../shared/edit-atendimento/edit-atendimento.module').then(
        (m) => m.EditAtendimentoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAgendaPageRoutingModule {}
