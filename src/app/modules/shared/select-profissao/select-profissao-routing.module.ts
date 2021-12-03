import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectProfissaoPage } from './select-profissao.page';

const routes: Routes = [
  {
    path: '',
    component: SelectProfissaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectProfissaoPageRoutingModule {}
