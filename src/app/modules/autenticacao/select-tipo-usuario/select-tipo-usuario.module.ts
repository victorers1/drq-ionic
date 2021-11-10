import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectTipoUsuarioPageRoutingModule } from './select-tipo-usuario-routing.module';

import { SelectTipoUsuarioPage } from './select-tipo-usuario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SelectTipoUsuarioPageRoutingModule,
  ],
  declarations: [SelectTipoUsuarioPage],
})
export class SelectTipoUsuarioPageModule {}
