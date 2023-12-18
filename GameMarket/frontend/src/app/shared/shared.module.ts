import {NgModule} from "@angular/core";
import {ChipsComponent} from "./chips/chips.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        ChipsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ChipsComponent]
})
export class SharedModule {}
