import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosContaPageRoutingModule } from './dados-conta-routing.module';

import { DadosContaPage } from './dados-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosContaPageRoutingModule
  ],
  declarations: [DadosContaPage]
})
export class DadosContaPageModule {}
