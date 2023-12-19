import {NgModule} from "@angular/core";
import {ChipsComponent} from "./chips/chips.component";
import {CommonModule} from "@angular/common";
import {IconComponent} from "./icon/icon.component";

@NgModule({
    declarations: [
        ChipsComponent, IconComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ChipsComponent, IconComponent]
})
export class SharedModule {}
