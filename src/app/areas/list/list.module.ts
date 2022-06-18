import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPanelComponent } from './list-panel/list-panel.component';
import { ListDataService } from './list-data.service';

@NgModule({
    declarations: [
        ListPanelComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ListDataService
    ]
})

export class ListModule { }
