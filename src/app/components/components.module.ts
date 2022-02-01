import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DrqHeaderComponent } from './drq-header/drq-header.component';
import { ProfissionalItemComponent } from './profissional-item/profissional-item.component';
import { SafeAreaBottomComponent } from './safe-area-bottom/safe-area-bottom.component';

/**
 * Global components used in almost every page
 */
@NgModule({
  declarations: [
    DrqHeaderComponent,
    SafeAreaBottomComponent,
    ProfissionalItemComponent,
  ],
  exports: [
    DrqHeaderComponent,
    SafeAreaBottomComponent,
    ProfissionalItemComponent,
  ],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
