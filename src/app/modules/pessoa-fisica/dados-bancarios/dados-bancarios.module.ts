import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosBancariosPageRoutingModule } from './dados-bancarios-routing.module';

import { DadosBancariosPage } from './dados-bancarios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DadosBancariosPageRoutingModule
  ],
  declarations: [DadosBancariosPage]
})
export class DadosBancariosPageModule { }
