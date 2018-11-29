import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MenuItem} from 'primeng/api';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.css']
})
export class StaffHomeComponent implements OnInit {

  buttonLogout: MenuItem[];

  constructor(private authService: AuthService, private confirmationService: ConfirmationService) { }

  ngOnInit() {

    this.buttonLogout = [
      {label: 'User', icon: 'pi pi-user-minus', disabled: false},
      {label: 'Staff', icon: 'pi pi-users', disabled: false},
      {label: 'Admin', icon: 'pi pi-user-plus', disabled: true}
    ];
  }

  logout() {
    this.confirmationService.confirm({
      message: 'Sei sicuro di voler uscire?',
      header: 'Conferma Logout',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.authService.logout();
      },
      reject: () => {
      }
    });
  }

}
