import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRequisicaoDadoPage } from './edit-requisicao-dado.page';

const routes: Routes = [
  {
    path: '',
    component: EditRequisicaoDadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRequisicaoDadoPageRoutingModule {}
