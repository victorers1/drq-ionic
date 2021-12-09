import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectEspecialidadePageRoutingModule } from './select-especialidade-routing.module';

import { SelectEspecialidadePage } from './select-especialidade.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectEspecialidadePageRoutingModule,
  ],
  declarations: [SelectEspecialidadePage],
})
export class SelectEspecialidadePageModule {}
