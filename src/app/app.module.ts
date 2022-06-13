import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardModule } from './dashboard/dashboard.module';
import { ListModule } from './list/list.module';
import { EditionModule } from './edition/edition.module';
import { LoginingModule } from './logining/logining.module';

import { AppService } from './app.service';

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
        EditionModule,
        LoginingModule
    ],
    providers: [
        AppService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
