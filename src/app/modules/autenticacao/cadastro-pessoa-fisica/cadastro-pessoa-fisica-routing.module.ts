import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPessoaFisicaPage } from './cadastro-pessoa-fisica.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPessoaFisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPessoaFisicaPageRoutingModule {}
