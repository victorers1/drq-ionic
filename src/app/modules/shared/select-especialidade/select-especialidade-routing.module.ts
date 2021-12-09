import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectEspecialidadePage } from './select-especialidade.page';

const routes: Routes = [
  {
    path: '',
    component: SelectEspecialidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectEspecialidadePageRoutingModule {}
