import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { DrqEmptyComponent } from "./drq-empty/drq-empty.component";
import { DrqErrorComponent } from "./drq-error/drq-error.component";
import { DrqHeaderComponent } from "./drq-header/drq-header.component";
import { DrqLoadingComponent } from "./drq-loading/drq-loading.component";
import { SafeAreaBottomComponent } from "./safe-area-bottom/safe-area-bottom.component";

/** 
 * Components used in almost every page
*/
@NgModule({
    declarations: [
        DrqHeaderComponent,
        DrqErrorComponent,
        DrqLoadingComponent,
        DrqEmptyComponent,
        SafeAreaBottomComponent,
    ],
    exports: [
        DrqHeaderComponent,
        DrqErrorComponent,
        DrqLoadingComponent,
        DrqEmptyComponent,
        SafeAreaBottomComponent,
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
})
export class ComponentsModule { }