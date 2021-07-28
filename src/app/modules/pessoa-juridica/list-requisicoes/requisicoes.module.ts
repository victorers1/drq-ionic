import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequisicoesPageRoutingModule } from './requisicoes-routing.module';

import { RequisicoesPage } from './requisicoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequisicoesPageRoutingModule
  ],
  declarations: [RequisicoesPage]
})
export class RequisicoesPageModule {}
