import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosExpedientePage } from './dados-expediente.page';

const routes: Routes = [
  {
    path: '',
    component: DadosExpedientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosExpedientePageRoutingModule {}
