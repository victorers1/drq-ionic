import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './pessoa-juridica-routing.module';

import { HomePage } from './pessoa-juridica.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponentsModule } from 'src/app/components/home-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomeComponentsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
