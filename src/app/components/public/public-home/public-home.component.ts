import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css']
})
export class PublicHomeComponent implements OnInit {
  name;
  email;
  message;

  constructor(private router: Router, private  authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      switch (this.authService.getRole()) {
        case 'user':
          this.router.navigate(['UsersHome']);
          break;
        case 'staff':
          this.router.navigate(['StaffHome']);
          break;
        case 'admin':
          this.router.navigate(['AdminHome']);
          break;
      }
    }
  }

  // Funzione login
  onLogin() {
    this.authService.login();
  }

  // Posiziona la pagina all'elemento desiderato
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
  send_mail() {
    emailjs.send('default_service', 'prova_mail', {'name': this.name, 'email': this.email, 'message': this.message}, 'user_5Q5r9NvL2I6JOfp8yBVfe')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    this.router.navigate(['SendMail']);
  }

}
