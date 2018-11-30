import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {UsersService} from '../../../services/users/users.service';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersHomeComponent implements OnInit {
  displaySidebarToggle = false;
  profilePics;
  searchSide = false;
  name: string;
  displayNewSale = false;
  items: MenuItem[];
  search;
  constructor(private usersService: UsersService, private authService: AuthService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Sale',
        icon: 'pi pi-pw pi-pencil',
        items: [
          {label: 'New Sale', icon: 'pi pi-fw pi-plus', command: (event) => { this.displayNewSale = true; }},
          {label: 'Edit Sale', icon: 'pi pi-fw pi-refresh'}
        ]
      },
      {
        label: 'Buy',
        icon: 'fa fa-fw fa-credit-card',
        items: [
          {label: 'New Buy', icon: 'pi pi-fw pi-plus'},
          {label: 'Edit Buy', icon: 'pi pi-fw pi-refresh'}
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]}
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {label: 'Save', icon: 'pi pi-fw pi-save'},
              {label: 'Update', icon: 'pi pi-fw pi-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              {label: 'Delete', icon: 'pi pi-fw pi-minus'}
            ]
          }
        ]
      }
    ];
    this.displayNewSale = false;
    this.profilePics = this.authService.tokenDecode()['picture'];
    if (!this.authService.tokenDecode()['email_verified']) {
      this.router.navigate(['UserNoVerify']);
    }
    this.name = this.getName();
  }
  logout() {
    this.confirmationService.confirm({
      message: 'Confermi di voler uscire?',
      header: 'Logout',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.authService.logout();
      },
      reject: () => {
        this.messageService.add({severity: 'warn', summary: 'Logout Annullato!', detail: 'Il logout è stato rifiutato...'});
      }
    });
  }
  getName(): string {
    return this.authService.tokenDecode()['name'];
  }
  test(search) {
    this.search = search;
    this.searchSide = true;
  }
}
