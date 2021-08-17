import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectProfissionalPage } from './select-profissional.page';

const routes: Routes = [
  {
    path: '',
    component: SelectProfissionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectProfissionalPageRoutingModule {}
