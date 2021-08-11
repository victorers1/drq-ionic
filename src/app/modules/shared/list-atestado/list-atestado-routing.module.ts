import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAtestadoPage } from './list-atestado.page';

const routes: Routes = [
  {
    path: '',
    component: ListAtestadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAtestadoPageRoutingModule {}
