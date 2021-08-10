import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAtendimentoPage } from './edit-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: EditAtendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAtendimentoPageRoutingModule {}
