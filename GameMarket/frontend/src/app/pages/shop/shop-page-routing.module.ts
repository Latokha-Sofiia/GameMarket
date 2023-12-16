import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ShopPageComponent} from "./shop-page/shop-page.component";

const routes = [
  {
    path: '',
    component: ShopPageComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopPageRoutingModule{}
