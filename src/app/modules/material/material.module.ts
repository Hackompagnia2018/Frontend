import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
