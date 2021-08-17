import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { ListReceitaPage } from './list-receita.page';

const drqRoutes = new DRQRoutes()

const routes: Routes = [
  {
    path: '',
    component: ListReceitaPage
  },
  {
    path: drqRoutes.EDIT_RECEITA,
    loadChildren: () => import('../../shared/edit-receita/edit-receita.module').then(m => m.EditReceitaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReceitaPageRoutingModule { }
