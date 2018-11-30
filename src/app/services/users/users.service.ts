import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../classes/user';
import {Url} from '../../config/url';
import {htmlAstToRender3Ast} from '@angular/compiler/src/render3/r3_template_transform';

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
