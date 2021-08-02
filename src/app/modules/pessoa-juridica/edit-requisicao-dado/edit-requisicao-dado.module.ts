import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRequisicaoDadoPageRoutingModule } from './edit-requisicao-dado-routing.module';

import { EditRequisicaoDadoPage } from './edit-requisicao-dado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditRequisicaoDadoPageRoutingModule
  ],
  declarations: [EditRequisicaoDadoPage]
})
export class EditRequisicaoDadoPageModule { }
