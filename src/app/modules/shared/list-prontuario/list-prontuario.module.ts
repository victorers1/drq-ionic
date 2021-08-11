import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProntuarioPageRoutingModule } from './list-prontuario-routing.module';

import { ListProntuarioPage } from './list-prontuario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListProntuarioPageRoutingModule
  ],
  declarations: [ListProntuarioPage]
})
export class ListProntuarioPageModule { }
