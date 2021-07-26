import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { DrqHeaderComponent } from "./drq-header/drq-header.component";

@NgModule({
    declarations: [DrqHeaderComponent],
    exports: [DrqHeaderComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
})
export class ComponentsModule { }