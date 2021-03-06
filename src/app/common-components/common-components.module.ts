import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserComponent } from './user/user.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule
    ],
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ]
})

export class CommonComponentsModule { }
