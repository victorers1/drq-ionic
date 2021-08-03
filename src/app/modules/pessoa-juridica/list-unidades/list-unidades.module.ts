import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListUnidadesPageRoutingModule } from './list-unidades-routing.module';

import { ListUnidadesPage } from './list-unidades.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListUnidadesPageRoutingModule
  ],
  declarations: [ListUnidadesPage]
})
export class ListUnidadesPageModule { }
