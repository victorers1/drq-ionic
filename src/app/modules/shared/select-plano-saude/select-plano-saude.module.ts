import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPlanoSaudePageRoutingModule } from './select-plano-saude-routing.module';

import { SelectPlanoSaudePage } from './select-plano-saude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPlanoSaudePageRoutingModule
  ],
  declarations: [SelectPlanoSaudePage]
})
export class SelectPlanoSaudePageModule {}
