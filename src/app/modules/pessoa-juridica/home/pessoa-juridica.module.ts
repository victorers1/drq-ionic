import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './pessoa-juridica-routing.module';

import { HomePage } from './pessoa-juridica.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { OptionTileComponent } from 'src/app/components/option-tile/option-tile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, OptionTileComponent]
})
export class HomePageModule { }
