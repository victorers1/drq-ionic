import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAtestadoPage } from './edit-atestado.page';

const routes: Routes = [
  {
    path: '',
    component: EditAtestadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAtestadoPageRoutingModule {}
