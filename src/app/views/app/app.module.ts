import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { HotTableModule } from '@handsontable/angular';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { UiModalsContainersModule } from 'src/app/containers/ui/modals/ui.modals.containers.module';

@NgModule({
  declarations: [BlankPageComponent, AppComponent],
  imports: [
    UiModalsContainersModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    HotTableModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class AppModule { }

