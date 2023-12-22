import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {DefaultLayoutComponent} from "./components/default-layout/default-layout.component";
import {AuthComponent} from "./pages/auth/auth.component";

const routes: Routes = [
    {
        path: '401',
        component: SidebarComponent,
    },
    {
        path: '404',
        component: SidebarComponent,
    },
    {
        path: 'login',
        component: SidebarComponent,
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'shop',
                loadChildren: () =>
                    import('./pages/shop/shop-page.module').then(
                        (m) => m.ShopPageModule,
                    ),
            },
            {
                path: 'account',
                component: AuthComponent
            },
            {
                path: '',
                loadChildren: () =>
                    import('./pages/shop/shop-page.module').then(
                        (m) => m.ShopPageModule,
                    ),
            },
        ]
    },
    {
        path: '**',
        component: SidebarComponent,
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
