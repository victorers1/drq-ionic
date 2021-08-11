import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProntuarioPage } from './edit-prontuario.page';

const routes: Routes = [
  {
    path: '',
    component: EditProntuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProntuarioPageRoutingModule {}
