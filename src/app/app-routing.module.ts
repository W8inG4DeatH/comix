import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { WidgetsPanelComponent } from './dashboard/widgets-panel/widgets-panel.component';
import { ListPanelComponent } from './list/list-panel/list-panel.component';
import { ComixEditorComponent } from './edition/comix-editor/comix-editor.component';

const routes: Routes = [
    { path: '', component: WidgetsPanelComponent },
    { path: 'dashboard', component: WidgetsPanelComponent },
    { path: 'list', component: ListPanelComponent },
    { path: 'edition', component: ComixEditorComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        DashboardModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
