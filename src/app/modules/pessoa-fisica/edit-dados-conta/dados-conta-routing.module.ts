import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosContaPage } from './dados-conta.page';

const routes: Routes = [
  {
    path: '',
    component: DadosContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosContaPageRoutingModule {}
