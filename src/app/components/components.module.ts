import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { DrqEmptyComponent } from "./drq-empty/drq-empty.component";
import { DrqErrorComponent } from "./drq-error/drq-error.component";
import { DrqHeaderComponent } from "./drq-header/drq-header.component";
import { DrqLoadingComponent } from "./drq-loading/drq-loading.component";

@NgModule({
    declarations: [DrqHeaderComponent, DrqErrorComponent, DrqLoadingComponent, DrqEmptyComponent,],
    exports: [DrqHeaderComponent, DrqErrorComponent, DrqLoadingComponent, DrqEmptyComponent,],
    imports: [
        CommonModule,
        IonicModule
    ],
})
export class ComponentsModule { }