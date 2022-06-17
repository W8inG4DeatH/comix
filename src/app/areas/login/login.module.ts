import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginService } from './login.service';

@NgModule({
    declarations: [
        NoAccessComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        LoginService
    ]
})

export class LoginModule { }
