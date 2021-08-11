import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAtestadoPageRoutingModule } from './edit-atestado-routing.module';

import { EditAtestadoPage } from './edit-atestado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditAtestadoPageRoutingModule
  ],
  declarations: [EditAtestadoPage]
})
export class EditAtestadoPageModule { }
