import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUnidadePageRoutingModule } from './edit-unidade-routing.module';

import { EditUnidadePage } from './edit-unidade.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditUnidadePageRoutingModule
  ],
  declarations: [EditUnidadePage]
})
export class EditUnidadePageModule { }
