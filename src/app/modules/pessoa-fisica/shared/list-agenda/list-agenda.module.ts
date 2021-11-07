import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAgendaPageRoutingModule } from './list-agenda-routing.module';

import { ListAgendaPage } from './list-agenda.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListAgendaPageRoutingModule
  ],
  declarations: [ListAgendaPage]
})
export class ListAgendaPageModule { }
