import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SendMailComponent} from '../../components/_plus/send-mail/send-mail.component';
import {AccessDeniedComponent} from '../../components/_plus/access-denied/access-denied.component';
import {RoleGuardAdminService} from '../../services/auth/role-guard-admin.service';
import {AuthGuardService} from '../../services/auth/auth-guard.service';
import {AdminHomeComponent} from '../../components/admin/admin-home/admin-home.component';
import {RoleGuardStaffService} from '../../services/auth/role-guard-staff.service';
import {StaffHomeComponent} from '../../components/staff/staff-home/staff-home.component';
import {UsersNoVerifyComponent} from '../../components/users/users-no-verify/users-no-verify.component';
import {CallbackComponent} from '../../components/_plus/callback/callback.component';
import {UsersHomeComponent} from '../../components/users/users-home/users-home.component';
import {PublicHomeComponent} from '../../components/public/public-home/public-home.component';

const routes: Routes = [
  {
    path: '',
    component: PublicHomeComponent
  },
  {
    path: 'UsersHome',
    component: UsersHomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'UserNoVerify',
    component: UsersNoVerifyComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'StaffHome',
    component: StaffHomeComponent,
    canActivate: [AuthGuardService, RoleGuardStaffService]

  },
  {
    path: 'AdminHome',
    component: AdminHomeComponent,
    canActivate: [AuthGuardService, RoleGuardAdminService]

  },
  {
    path: 'AccessDenied',
    component: AccessDeniedComponent
  },
  {
    path: 'SendMail',
    component: SendMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
