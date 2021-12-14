import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { DadosProfissionaisPage } from './dados-profissionais.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: DadosProfissionaisPage,
  },
  {
    path: drqRoutes.EDIT_EXPEDIENTE,
    loadChildren: () =>
      import('../../../shared/edit-expediente/edit-expediente.module').then(
        (m) => m.EditExpedientePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosProfissionaisPageRoutingModule {}
