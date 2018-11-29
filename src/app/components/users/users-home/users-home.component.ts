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
  displaySidebarToggle = true;
  profilePics;
  name: string;
  prods: string[] = ['Olio Esausto', 'Liquame', 'Liquiletame', 'Stallatico', 'Scarto Organico Generico', 'Altro'];
  filteredProds: any[];
  prod: string;
  displayNewSale = false;
  constructor(private usersService: UsersService, private authService: AuthService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.displayNewSale = false;
    this.profilePics = this.authService.tokenDecode()['picture'];
    if (!this.authService.tokenDecode()['email_verified']) {
      this.router.navigate(['UserNoVerify']);
    }
    this.name = this.getName();
  }
  filterProds(event) {
    this.filteredProds = [];
    for (let i = 0; i < this.prods.length; i++) {
      const prod = this.prods[i];
      if (prod.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredProds.push(prod);
      }
    }
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
}
