import {NgModule} from "@angular/core";
import {ChipsComponent} from "./chips/chips.component";
import {CommonModule} from "@angular/common";
import {IconComponent} from "./icon/icon.component";
import {CardComponent} from "./card/card.component";

@NgModule({
    declarations: [
        ChipsComponent, IconComponent, CardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ChipsComponent, IconComponent, CardComponent]
})
export class SharedModule {}
