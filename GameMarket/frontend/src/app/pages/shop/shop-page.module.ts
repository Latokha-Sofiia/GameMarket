import { NgModule } from '@angular/core';
import { ShopPageRoutingModule } from './shop-page-routing.module';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [ShopPageRoutingModule, CommonModule, SharedModule],
  declarations: [ShopPageComponent],
  providers: [],
})
export class ShopPageModule {}
