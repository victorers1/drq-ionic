import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosProfissionaisPageRoutingModule } from './dados-profissionais-routing.module';

import { DadosProfissionaisPage } from './dados-profissionais.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    DadosProfissionaisPageRoutingModule
  ],
  declarations: [DadosProfissionaisPage]
})
export class DadosProfissionaisPageModule { }
