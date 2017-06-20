import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ShowLioliService {
  _showLioli$: BehaviorSubject<boolean>;
  showLioli$: Observable<boolean>;

  get current(): boolean {
    return this._showLioli$.getValue();
  }

  constructor() {
    this._showLioli$ = new BehaviorSubject(((window.innerWidth < 750) ? false : true));
    this.showLioli$ = this._showLioli$.asObservable();
  }

  toggleShowLioli() {
    this._showLioli$.next(!this.current);
  }
}
