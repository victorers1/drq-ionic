import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReceitaPage } from './list-receita.page';

const routes: Routes = [
  {
    path: '',
    component: ListReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReceitaPageRoutingModule {}
