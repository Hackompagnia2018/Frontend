import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AutoCompleteModule,
  ButtonModule,
  CardModule, DropdownModule,
  FieldsetModule, FileUploadModule,
  InputTextModule,
  MegaMenuModule,
  MessageModule, PanelMenuModule, PickListModule,
  ProgressSpinnerModule,
  SidebarModule, SlideMenuModule,
  SplitButtonModule,
  TabViewModule,
  ToggleButtonModule,
  ToolbarModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {GMapModule} from 'primeng/gmap';

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
    FieldsetModule,
    DropdownModule,
    FieldsetModule,
    MegaMenuModule,
    DropdownModule,
    FileUploadModule,
    ToggleButtonModule,
    PanelMenuModule,
    SlideMenuModule,
    PickListModule
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
    FieldsetModule,
    DropdownModule,
    FieldsetModule,
    MegaMenuModule,
    DropdownModule,
    FileUploadModule,
    ToggleButtonModule,
    PanelMenuModule,
    SlideMenuModule,
    PickListModule
  ],
  declarations: []
})
export class PrimeNgModule {
}
