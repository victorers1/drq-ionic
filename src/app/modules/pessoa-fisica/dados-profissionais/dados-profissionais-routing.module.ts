import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosProfissionaisPage } from './dados-profissionais.page';

const routes: Routes = [
  {
    path: '',
    component: DadosProfissionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosProfissionaisPageRoutingModule {}
