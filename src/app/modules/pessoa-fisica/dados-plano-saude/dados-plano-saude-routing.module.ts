import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPlanoSaudePage } from './dados-plano-saude.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPlanoSaudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPlanoSaudePageRoutingModule {}
