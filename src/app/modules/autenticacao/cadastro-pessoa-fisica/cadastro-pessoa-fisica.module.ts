import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPessoaFisicaPageRoutingModule } from './cadastro-pessoa-fisica-routing.module';

import { CadastroPessoaFisicaPage } from './cadastro-pessoa-fisica.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CadastroPessoaFisicaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CadastroPessoaFisicaPage],
})
export class CadastroPessoaFisicaPageModule {}
