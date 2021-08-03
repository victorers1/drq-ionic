import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUnidadePage } from './edit-unidade.page';

const routes: Routes = [
  {
    path: '',
    component: EditUnidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditUnidadePageRoutingModule {}
