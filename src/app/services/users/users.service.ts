import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../classes/user';
import {Url} from '../../config/url';

@Injectable()
export class UsersService {
  url = new Url();
  constructor(private http: HttpClient) { }
  // Restituisce i dati dell'utente
  public getCredentials() {
    return this.http.get<User>(this.url.getDevUrl() + '/user/get/credentials');
  }
  public postCredentials() {
    return this.http.post<boolean>(this.url.getDevUrl() + '/user/post/credentials', null);
  }
  public putCredentials(cred: User) {
    return this.http.put(this.url.getDevUrl() + '/user/put/credentials/' + cred.name + '/' + cred.surname + '/' + cred.cell, null);
  }
}
