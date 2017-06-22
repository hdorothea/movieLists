import { Injectable } from '@angular/core';
import { List } from './lists.service';
import { environment } from '../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentListService {
  private _list$: BehaviorSubject<List>;
  list$: Observable<List>;


  setList(list: List) {
    this._list$.next(list);
  }

  getList() {
    return this._list$.getValue();
  }

  constructor(private http: Http) {
    this._list$ = new BehaviorSubject(undefined);
    this.list$ = this._list$.asObservable();
  }

  _updateTitleBackend(newTitle: string) {
    const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
    return this.http.put(`${environment.BASE_URL}/movielists/${this.getList().id}`, { title: newTitle }, options).toPromise();
  }


  updateTitle(newTitle: string) {
    this._updateTitleBackend(newTitle)
      .then(() => {
        const newList = this.getList();
        newList.title = newTitle;
        this._list$.next(newList);
      })
      .catch((err) => console.log(err));
  }

  _addMovieBackend(movieIdToAdd: number) {
    const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
    return this.http.post(`${environment.BASE_URL}/movielists/${this.getList().id}/${movieIdToAdd}`, {}, options).toPromise();
  }

  addMovie(movieIdToAdd: number) {
    this._addMovieBackend(movieIdToAdd)
      .then(() => {
        const newList = this.getList();
        newList.movieIds.push(movieIdToAdd);
        this._list$.next(newList);
      });
  }

  _removeMovieBackend(movieIdToDelete: number) {
    return this.http.delete(`${environment.BASE_URL}/movielists/${this.getList().id}/${movieIdToDelete}`).toPromise();
  }


  removeMovie(movieIdToDelete: number) {
    this._removeMovieBackend(movieIdToDelete)
      .then(() => {
        const newList = this.getList();
        newList.movieIds.forEach((id, index) => {
          if (movieIdToDelete === id) {
            newList.movieIds.splice(index, 1);
          }
        });
        this._list$.next(newList);
      });
  }
}
