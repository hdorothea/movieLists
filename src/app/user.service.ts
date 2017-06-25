import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { ListsService } from './lists.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface LogedIn {
  logedIn: boolean;
  username: string;
  userId: number;
}

const getJsonPostOptions = function () {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers });
  return options;
};

@Injectable()
export class UserService {
  _logedIn$: BehaviorSubject<LogedIn>;
  logedIn$: Observable<LogedIn>;

  constructor(private http: Http) {
    this._logedIn$ = new BehaviorSubject({
      logedIn: false,
      username: undefined,
      userId: undefined
    });
    this.logedIn$ = this._logedIn$.asObservable();
    this.fetchLogedIn();
  }

  fetchLogedIn() {
    this.http.get(`${environment.BASE_URL}/user/logedIn`).map((response) => response.json())
    .subscribe((loggedIn) => this._logedIn$.next(loggedIn));
  }


  signup(signupData) {
    const options = getJsonPostOptions();
    return this.http.post(`${environment.BASE_URL}/user/signup`, JSON.stringify(signupData), options).toPromise();
  }

  login(loginData) {
    const options = getJsonPostOptions();
    return this.http.post(`${environment.BASE_URL}/user/login`, JSON.stringify(loginData), options)
      .toPromise()
      .then(() => { this.fetchLogedIn() });
  }

  logout() {
    const options = getJsonPostOptions();
    return this.http.post(`${environment.BASE_URL}/user/logout`, JSON.stringify({}), options)
      .toPromise()
      .then(() => { this.fetchLogedIn(); });
  }

  checkCorrectPassword(data) {
    const options = getJsonPostOptions();
    return this.http.post(`${environment.BASE_URL}/user/checkmatch`, JSON.stringify(data), options)
      .map((res) => res.json())
      .toPromise();
  }

  checkUserExists(username: string) {
    const options = getJsonPostOptions();
    return this.http.post(`${environment.BASE_URL}/user/checkname`, JSON.stringify({ username }), options)
      .map((res) => res.json())
      .toPromise();
  }

}
