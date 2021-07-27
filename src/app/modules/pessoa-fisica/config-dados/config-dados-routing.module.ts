import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigDadosPage } from './config-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigDadosPageRoutingModule {}
