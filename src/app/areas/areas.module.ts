import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonComponentsModule } from '../common-components/common-components.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ListModule } from './list/list.module';
import { EditionModule } from './edition/edition.module';
import { LoginModule } from './login/login.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
    declarations:
        [
            MainHeaderComponent,
            MainMenuComponent
        ],
    imports:
        [
            CommonModule,
            FlexLayoutModule,
            CommonComponentsModule,
            DashboardModule,
            ListModule,
            EditionModule,
            LoginModule
        ],
    exports:
        [
            MainHeaderComponent,
            MainMenuComponent
        ]
})

export class AreasModule { }
