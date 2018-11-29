import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/_plus/root/root.component';
import { PublicHomeComponent } from './components/public/public-home/public-home.component';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import {MaterialModule} from './modules/material/material.module';
import {PrimengModule} from './modules/primeng/primeng.module';

@NgModule({
  declarations: [
    RootComponent,
    PublicHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    PrimengModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
