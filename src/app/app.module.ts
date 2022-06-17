import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonComponentsModule } from './common-components/common-components.module';
import { AreasModule } from './areas/areas.module';

import { AppService } from './app.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        CommonComponentsModule,
        AreasModule
    ],
    providers: [
        AppService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
