import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAtendimentoPageRoutingModule } from './edit-atendimento-routing.module';

import { EditAtendimentoPage } from './edit-atendimento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditAtendimentoPageRoutingModule
  ],
  declarations: [EditAtendimentoPage]
})
export class EditAtendimentoPageModule { }
