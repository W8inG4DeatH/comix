import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './areas/dashboard/dashboard.module';
import { WidgetsPanelComponent } from './areas/dashboard/widgets-panel/widgets-panel.component';
import { ListPanelComponent } from './areas/list/list-panel/list-panel.component';
import { ComixEditorComponent } from './areas/edition/comix-editor/comix-editor.component';
import { EditionGuardGuard } from './areas/edition/edition-guard.guard';

const routes: Routes = [
    { path: '', component: WidgetsPanelComponent },
    { path: 'dashboard', component: WidgetsPanelComponent },
    { path: 'list', component: ListPanelComponent },
    { path: 'edition', component: ComixEditorComponent, canActivate: [EditionGuardGuard] }
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
