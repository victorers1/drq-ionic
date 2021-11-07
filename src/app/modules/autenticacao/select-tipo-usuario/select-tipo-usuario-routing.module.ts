import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { SelectTipoUsuarioPage } from './select-tipo-usuario.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: SelectTipoUsuarioPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTipoUsuarioPageRoutingModule {}
