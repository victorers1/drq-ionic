import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReceitaPageRoutingModule } from './list-receita-routing.module';

import { ListReceitaPage } from './list-receita.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListReceitaPageRoutingModule
  ],
  declarations: [ListReceitaPage]
})
export class ListReceitaPageModule { }
