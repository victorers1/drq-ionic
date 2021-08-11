import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAtestadoPageRoutingModule } from './list-atestado-routing.module';

import { ListAtestadoPage } from './list-atestado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListAtestadoPageRoutingModule
  ],
  declarations: [ListAtestadoPage]
})
export class ListAtestadoPageModule { }
