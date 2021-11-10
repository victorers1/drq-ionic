import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarPageRoutingModule } from './agendar-routing.module';

import { AgendarPage } from './agendar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AgendarPageRoutingModule
  ],
  declarations: [AgendarPage]
})
export class AgendarPageModule { }
