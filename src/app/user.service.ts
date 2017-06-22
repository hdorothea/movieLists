import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { ListsService} from './lists.service';

const getJsonPostOptions = function () {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers });
  return options;
};

@Injectable()
export class UserService {

  constructor(private http: Http, private listsService: ListsService) { }


  signup(signupData) {
    console.log(signupData);
    const options = getJsonPostOptions();
    this.http.get(`${environment.BASE_URL}/user/signup`);
    this.http.post(`${environment.BASE_URL}/user/signup`, JSON.stringify(signupData), options).toPromise();
  }

  login(loginData) {
    const options = getJsonPostOptions();
    this.http.post(`${environment.BASE_URL}/user/login`, JSON.stringify(loginData), options).subscribe(() => this.listsService.load());
  }

  checkCorrectPassword(data) {
    const options = getJsonPostOptions();
    this.http.post(`${environment.BASE_URL}/user/checkMatch`, JSON.stringify(data), options)
    .map((res) => res.json())
    .toPromise();
  }

  checkUserExists(username: string) {
    const options = getJsonPostOptions();
    return this.http.post(`${environment.BASE_URL}/user/checkname`, JSON.stringify({username}), options)
    .map((res) => res.json())
    .toPromise();
  }

}
