import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigDadosPageRoutingModule } from './config-dados-routing.module';

import { ConfigDadosPage } from './config-dados.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ConfigDadosPageRoutingModule
  ],
  declarations: [ConfigDadosPage]
})
export class ConfigDadosPageModule { }
