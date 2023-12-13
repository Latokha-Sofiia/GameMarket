import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from "./components/shop/shop.component";
import { PurchasesComponent } from './components/purchases/purchases.component';
import { PurchasesForUnauthorizedUserComponent } from './components/purchases-for-unauthorized-user/purchases-for-unauthorized-user.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesForUnauthorizedUserComponent } from './components/favorites-for-unauthorized-user/favorites-for-unauthorized-user.component';
import { SellerAuthorizationComponent } from "./components/seller-authorization/seller-authorization.component";
import { SellersGoodsComponent } from './components/sellers-goods/sellers-goods.component';
import { CreatingNewGameComponent } from './components/creating-new-game/creating-new-game.component';
import { UserAuthorizationComponent } from './components/user-authorization/user-authorization.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HatComponent } from './components/hat/hat.component';
@NgModule({
  declarations: [AppComponent, ShopComponent, PurchasesComponent, PurchasesForUnauthorizedUserComponent, FavoritesComponent, FavoritesForUnauthorizedUserComponent, SellerAuthorizationComponent, SellersGoodsComponent, CreatingNewGameComponent, UserAuthorizationComponent, CardProductComponent, HatComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
