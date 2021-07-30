import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosExpedientePageRoutingModule } from './dados-expediente-routing.module';

import { DadosExpedientePage } from './dados-expediente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DadosExpedientePageRoutingModule
  ],
  declarations: [DadosExpedientePage]
})
export class DadosExpedientePageModule { }
