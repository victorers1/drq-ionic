import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { ListExpedientesPage } from './list-expedientes.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: ListExpedientesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExpedientesPageRoutingModule {}
