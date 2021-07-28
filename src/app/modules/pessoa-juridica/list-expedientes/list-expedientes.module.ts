import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListExpedientesPageRoutingModule } from './list-expedientes-routing.module';

import { ListExpedientesPage } from './list-expedientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListExpedientesPageRoutingModule
  ],
  declarations: [ListExpedientesPage]
})
export class ListExpedientesPageModule {}
