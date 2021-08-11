import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditReceitaPage } from './edit-receita.page';

const routes: Routes = [
  {
    path: '',
    component: EditReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditReceitaPageRoutingModule {}
