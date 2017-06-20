import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShowLoginService {
  _showLogin$: BehaviorSubject<boolean>;
  showLogin$: Observable<boolean>;

  get current(): boolean {
    return this._showLogin$.getValue();
  }

  constructor() {
    this._showLogin$ = new BehaviorSubject(false);
    this.showLogin$ = this._showLogin$.asObservable();
  }

  toggleShowLogin() {
    this._showLogin$.next(!this.current);
  }

  setShowLogin(showLogin: boolean) {
    this._showLogin$.next(showLogin);
  }
}

