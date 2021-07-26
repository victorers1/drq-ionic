import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaFisicaPageRoutingModule } from './pessoa-fisica-routing.module';

import { PessoaFisicaPage } from './pessoa-fisica.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { OptionTileComponent } from 'src/app/components/option-tile/option-tile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PessoaFisicaPageRoutingModule,
  ],
  declarations: [PessoaFisicaPage, OptionTileComponent]
})
export class PessoaFisicaPageModule { }
