import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoCompleteModule, ButtonModule, CardModule, FieldsetModule, InputTextModule, MessageModule, ProgressSpinnerModule, SidebarModule, SplitButtonModule, TabViewModule, ToggleButtonModule, ToolbarModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    TabViewModule,
    TableModule,
    SplitButtonModule,
    ProgressSpinnerModule,
    MessageModule,
    InputTextModule,
    ToggleButtonModule,
    CardModule,
    DialogModule,
    AutoCompleteModule,
    FieldsetModule
  ],
  exports: [
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    TabViewModule,
    TableModule,
    SplitButtonModule,
    ProgressSpinnerModule,
    ToastModule,
    MessageModule,
    InputTextModule,
    ToggleButtonModule,
    CardModule,
    DialogModule,
    AutoCompleteModule,
    FieldsetModule
  ],
  declarations: []
})
export class PrimeNgModule {
}
