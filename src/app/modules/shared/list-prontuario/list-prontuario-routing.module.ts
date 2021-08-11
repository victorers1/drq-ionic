import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProntuarioPage } from './list-prontuario.page';

const routes: Routes = [
  {
    path: '',
    component: ListProntuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProntuarioPageRoutingModule {}
