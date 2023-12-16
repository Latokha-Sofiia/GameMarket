import { NgModule } from '@angular/core';
import { ShopPageRoutingModule } from './shop-page-routing.module';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ShopPageRoutingModule, CommonModule],
  declarations: [ShopPageComponent],
  providers: [],
})
export class ShopPageModule {}
