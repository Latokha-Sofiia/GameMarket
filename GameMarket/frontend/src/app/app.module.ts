import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
