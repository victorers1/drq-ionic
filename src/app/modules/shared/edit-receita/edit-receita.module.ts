import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditReceitaPageRoutingModule } from './edit-receita-routing.module';

import { EditReceitaPage } from './edit-receita.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditReceitaPageRoutingModule
  ],
  declarations: [EditReceitaPage]
})
export class EditReceitaPageModule { }
