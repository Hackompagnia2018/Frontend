import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-users-no-verify',
  templateUrl: './users-no-verify.component.html',
  styleUrls: ['./users-no-verify.component.css']
})
export class UsersNoVerifyComponent implements OnInit {
  name;
  email;
  message;

  constructor(private router: Router, private authServices: AuthService) { }

  ngOnInit() {
  }

  // Funzione per tornare alla home
  onHome() {
    this.authServices.logout();
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
