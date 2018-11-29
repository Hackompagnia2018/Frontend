import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class RoleGuardStaffService implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('role') === 'staff'){
      return true;
    } else {
      this.router.navigate(['AccessDenied']);
      return false;
    }
  }
}
