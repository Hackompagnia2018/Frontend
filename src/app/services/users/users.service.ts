import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Url} from '../../config/url';

@Injectable()
export class UsersService {
  url = new Url();
  constructor(private http: HttpClient) { }
 postNewSale(newSale) {
    return this.http.post(this.url.devUrl + '/user/post/newSale', newSale);
 }
 postSuggestion (cell) {
    return this.http.post(this.url.devUrl + '/user/post/suggestions', cell);
 }
}
