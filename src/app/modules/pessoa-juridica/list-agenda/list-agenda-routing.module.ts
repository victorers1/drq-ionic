import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAgendaPage } from './list-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: ListAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAgendaPageRoutingModule {}
