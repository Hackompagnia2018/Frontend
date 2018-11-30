import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrimeNgModule} from './modules/primeng/primeng.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { PublicHomeComponent } from './components/public/public-home/public-home.component';
import { UsersHomeComponent } from './components/users/users-home/users-home.component';
import { RootComponent } from './components/_plus/root/root.component';
import {AuthService} from './services/auth/auth.service';
import { CallbackComponent } from './components/_plus/callback/callback.component';
import { UsersNoVerifyComponent } from './components/users/users-no-verify/users-no-verify.component';
import {AuthGuardService} from './services/auth/auth-guard.service';
import { StaffHomeComponent } from './components/staff/staff-home/staff-home.component';
import { AccessDeniedComponent } from './components/_plus/access-denied/access-denied.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import {RoleGuardAdminService} from './services/auth/role-guard-admin.service';
import {RoleGuardStaffService} from './services/auth/role-guard-staff.service';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/primeng';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './classes/interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SendMailComponent } from './components/_plus/send-mail/send-mail.component';
import {MessageService} from 'primeng/api';
import {UsersService} from './services/users/users.service';
import {MaterialModule} from './modules/material/material.module';
import { UserNewSaleComponent } from './components/users/user-new-sale/user-new-sale.component';
import { UsersSearchComponent } from './components/users/users-search/users-search.component';

@NgModule({
  declarations: [
    PublicHomeComponent,
    UsersHomeComponent,
    RootComponent,
    CallbackComponent,
    UsersNoVerifyComponent,
    StaffHomeComponent,
    AccessDeniedComponent,
    AdminHomeComponent,
    SendMailComponent,
    UserNewSaleComponent,
    SendMailComponent,
    UsersSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    AppRoutingModule,
    ConfirmDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthService,
    UsersService,
    AuthGuardService,
    RoleGuardAdminService,
    RoleGuardStaffService,
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
