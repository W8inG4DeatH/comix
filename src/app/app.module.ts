import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardModule } from './dashboard/dashboard.module';
import { ListModule } from './list/list.module';
import { EditionModule } from './edition/edition.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        DashboardModule,
        ListModule,
        EditionModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
