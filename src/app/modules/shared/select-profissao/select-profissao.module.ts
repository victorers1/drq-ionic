import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectProfissaoPageRoutingModule } from './select-profissao-routing.module';

import { SelectProfissaoPage } from './select-profissao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectProfissaoPageRoutingModule
  ],
  declarations: [SelectProfissaoPage]
})
export class SelectProfissaoPageModule {}
