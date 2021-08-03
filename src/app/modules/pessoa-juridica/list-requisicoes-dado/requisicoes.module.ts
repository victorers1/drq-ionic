import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequisicoesPageRoutingModule } from './requisicoes-routing.module';

import { RequisicoesPage } from './requisicoes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RequisicaoDadosComponent } from 'src/app/components/requisicao-dados/requisicao-dados.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RequisicoesPageRoutingModule
  ],
  declarations: [RequisicoesPage, RequisicaoDadosComponent]
})
export class RequisicoesPageModule { }
