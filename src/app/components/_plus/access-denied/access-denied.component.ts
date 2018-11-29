import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent implements OnInit {
  name;
  email;
  message;

  constructor(private router: Router) {
  }
  ngOnInit() {
  }
  // Funzione per tornare alla home
  onHome() {
    this.router.navigate(['']);
  }
  send_mail() {
    emailjs.send('default_service', 'prova_mail', {'name': this.name, 'email': this.email,'message': this.message}, 'user_5Q5r9NvL2I6JOfp8yBVfe')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    this.router.navigate(['SendMail']);
  }

}
