import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditExpedientePageRoutingModule } from './edit-expediente-routing.module';

import { EditExpedientePage } from './edit-expediente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditExpedientePageRoutingModule
  ],
  declarations: [EditExpedientePage]
})
export class EditExpedientePageModule { }
