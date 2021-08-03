import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUnidadesPage } from './list-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: ListUnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUnidadesPageRoutingModule {}
