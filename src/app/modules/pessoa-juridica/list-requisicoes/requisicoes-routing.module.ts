import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequisicoesPage } from './requisicoes.page';

const routes: Routes = [
  {
    path: '',
    component: RequisicoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequisicoesPageRoutingModule {}
