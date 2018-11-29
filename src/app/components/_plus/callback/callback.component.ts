import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../../../services/auth/auth-guard.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})

export class CallbackComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.handleAuthentication();
  }

}
