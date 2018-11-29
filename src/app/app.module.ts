import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/_plus/root/root.component';
import { PublicHomeComponent } from './components/public/public-home/public-home.component';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import {MaterialModule} from './modules/material/material.module';
import {PrimeNgModule} from './modules/primeng/primeng.module';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    RootComponent,
    PublicHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    PrimeNgModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [RootComponent]
})
export class AppModule { }
