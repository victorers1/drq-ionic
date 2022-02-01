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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAgendaPageRoutingModule {}
