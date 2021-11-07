import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPlanoSaudePageRoutingModule } from './dados-plano-saude-routing.module';

import { DadosPlanoSaudePage } from './dados-plano-saude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPlanoSaudePageRoutingModule
  ],
  declarations: [DadosPlanoSaudePage]
})
export class DadosPlanoSaudePageModule {}
