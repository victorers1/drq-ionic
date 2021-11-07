import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaFisicaPageRoutingModule } from './pessoa-fisica-routing.module';

import { PessoaFisicaPage } from './pessoa-fisica.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponentsModule } from 'src/app/components/home-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomeComponentsModule,
    PessoaFisicaPageRoutingModule,
  ],
  declarations: [PessoaFisicaPage]
})
export class PessoaFisicaPageModule { }
