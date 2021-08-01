import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosContaPageRoutingModule } from './dados-conta-routing.module';

import { DadosContaPage } from './dados-conta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DadosContaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DadosContaPage]
})
export class DadosContaPageModule { }