import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { RequisicoesPage } from './requisicoes.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: RequisicoesPage
  },
  {
    path: drqRoutes.EDIT_REQUISICAO_DADOS,
    loadChildren: () => import('../../pessoa-juridica/edit-requisicao-dado/edit-requisicao-dado.module').then(m => m.EditRequisicaoDadoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequisicoesPageRoutingModule { }
