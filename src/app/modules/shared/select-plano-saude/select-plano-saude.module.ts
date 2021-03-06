import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPlanoSaudePageRoutingModule } from './select-plano-saude-routing.module';

import { SelectPlanoSaudePage } from './select-plano-saude.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SelectPlanoSaudePageRoutingModule,
  ],
  declarations: [SelectPlanoSaudePage],
})
export class SelectPlanoSaudePageModule {}
