import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import * as jwt_decode from 'jwt-decode';
import {Auth} from '../classes/auth';

(window as any).global = window;

@Injectable()
export class AuthService {
  auth: Auth = new Auth();
  auth0 = new auth0.WebAuth({
    clientID: this.auth.clientId,
    domain: this.auth.domain,
    responseType: 'token id_token',
    redirectUri: this.auth.redirectUri,
    audience: this.auth.audience,
    scope: 'openid read:messages profile app_metadata user_metadata email write:messages'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        if (this.tokenDecode()['https://hack2018api.com/roles'] === 'admin') {
          this.router.navigate(['AdminHome']);
        }
        if (this.tokenDecode()['https://hack2018api.com/roles'] === 'staff') {
          this.router.navigate(['StaffHome']);
        }
        if (this.tokenDecode()['https://hack2018api.com/roles'] === 'user') {
          this.router.navigate(['UsersHome']);
        }
      } else if (err) {
        this.router.navigate(['']);
      }
    });
  }

  // Setta la sezione utente nel local storage del browser impostando token e id token
  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('role', this.tokenDecode()['https://hack2018api.com/roles']);
  }

  // Logout e rimuove i dati presenti nel local storage
  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('role');
    // Go back to the home route
    window.location.href = 'https://gwynbleidd.eu.auth0.com/v2/logout?returnTo=http://localhost:4200&client_id=Oedbx2SpZkV28oIxYCpA4hZGsjqiRAAe';
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  // Preleva l'id_token per essere controllato
  public getToken(): string {
    return localStorage.getItem('id_token');
  }

  // Preleva l'access_token per essere controllato
  public getAccessToken(): string {
    return localStorage.getItem('access_token');
  }
  // preleva il ruolo dell'utente dall'id token
  public getRole() {
    return this.tokenDecode()['https://hack2018api.com/roles'];
  }
  // Decodifica il token prelevato attraverso un'algoritmo di crittografia JWT
  public tokenDecode(): any {
    return jwt_decode(this.getToken());
  }

}
