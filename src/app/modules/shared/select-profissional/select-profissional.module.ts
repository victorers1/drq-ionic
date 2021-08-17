import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectProfissionalPageRoutingModule } from './select-profissional-routing.module';

import { SelectProfissionalPage } from './select-profissional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectProfissionalPageRoutingModule
  ],
  declarations: [SelectProfissionalPage]
})
export class SelectProfissionalPageModule {}
