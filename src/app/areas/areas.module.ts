import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { ListModule } from './list/list.module';
import { EditionModule } from './edition/edition.module';
import { LoginingModule } from './logining/logining.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DashboardModule,
        ListModule,
        EditionModule,
        LoginingModule
    ]
})

export class AreasModule { }
