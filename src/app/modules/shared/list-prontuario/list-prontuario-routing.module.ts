import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { ListProntuarioPage } from './list-prontuario.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: ListProntuarioPage
  },
  {
    path: drqRoutes.EDIT_PRONTUARIO,
    loadChildren: () => import('../edit-prontuario/edit-prontuario.module').then(m => m.EditProntuarioPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProntuarioPageRoutingModule { }
