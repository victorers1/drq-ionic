import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { OptionTileComponent } from "./option-tile/option-tile.component";

/**
 * Components for Homepages
 */
@NgModule({
    declarations: [
        OptionTileComponent,
    ],
    exports: [
        OptionTileComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
})
export class HomeComponentsModule { }