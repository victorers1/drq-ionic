import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { ListAtestadoPage } from './list-atestado.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: ListAtestadoPage,
  },
  {
    path: drqRoutes.EDIT_ATESTADO,
    loadChildren: () =>
      import(
        '../../pessoa-fisica/paciente/edit-atestado/edit-atestado.module'
      ).then((m) => m.EditAtestadoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAtestadoPageRoutingModule {}
