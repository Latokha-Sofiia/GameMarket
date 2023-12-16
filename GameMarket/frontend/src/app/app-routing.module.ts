import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop-page.module').then(m => m.ShopPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/shop/shop-page.module').then(m => m.ShopPageModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
