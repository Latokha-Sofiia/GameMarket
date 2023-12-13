import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from "./components/shop/shop.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,

  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
