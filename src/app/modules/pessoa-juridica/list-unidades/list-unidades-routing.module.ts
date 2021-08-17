import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { ListUnidadesPage } from './list-unidades.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: ListUnidadesPage
  },
  {
    path: drqRoutes.EDIT_UNIDADE,
    loadChildren: () => import('../../pessoa-juridica/edit-unidade/edit-unidade.module').then(m => m.EditUnidadePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUnidadesPageRoutingModule { }
