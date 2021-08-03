import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditExpedientePage } from './edit-expediente.page';

const routes: Routes = [
  {
    path: '',
    component: EditExpedientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditExpedientePageRoutingModule {}
