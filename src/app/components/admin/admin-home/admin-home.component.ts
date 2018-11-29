import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MenuItem, Message} from 'primeng/api';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  button_logout: MenuItem[];

  constructor(private authService: AuthService, private confirmationService: ConfirmationService) { }

  ngOnInit() {

    this.button_logout = [
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
