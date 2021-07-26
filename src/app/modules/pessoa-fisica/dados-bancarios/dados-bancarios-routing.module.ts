import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosBancariosPage } from './dados-bancarios.page';

const routes: Routes = [
  {
    path: '',
    component: DadosBancariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosBancariosPageRoutingModule {}
