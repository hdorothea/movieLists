import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  signup(signupData) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(environment.BASE_URL + 'signup', JSON.stringify(signupData), options).subscribe((res) => console.log(res));
  }

  login(loginData) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(environment.BASE_URL + 'login', JSON.stringify(loginData), options).subscribe((res) => console.log(res));
  }

}
