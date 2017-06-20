import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { guid } from './utilities';
import { environment } from '../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CurrentListService } from './current-list.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface List {
  'title': String;
  'movieIds': Number[];
  'id': String;
};

export function createNewList(title: String = 'MovieList', movieIds: number[] = []) {
  const newList = {
    'title': title,
    'movieIds': movieIds,
    'id': guid()
  };
  return newList;
}


@Injectable()
export class ListsService {
  private _lists$: BehaviorSubject<List[]>;
  lists$: Observable<List[]>;

  get lists() {
    return this._lists$.getValue();
  }

  constructor(private http: Http, private currentListService: CurrentListService) {
    this.load();
  }

  load() {
    this._lists$ = new BehaviorSubject(undefined);
    this.fetchListsBackend().subscribe((lists) => this._lists$.next(lists));
    this.lists$ = this._lists$.asObservable();
  }

  fetchListsBackend() {
    return this.http.get(environment.BASE_URL + '/movielists').map((res) => res.json());
  }


  addNewList(title: String = 'MovieList', movieIds: number[] = []) {
    const newMovieList = createNewList(title, movieIds);
    this.add(newMovieList);
  }

  _addBackend(list: List) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.BASE_URL}/movielists/${list.id}`, list, options).toPromise();
  }


  add(list: List) {
    this._addBackend(list)
      .then(() => {
        const newLists = this.lists;
        newLists.push(list);
        this._lists$.next(newLists);
        this.currentListService.list = list;
      });
  }

  _deleteBackend(listToDelete: List) {
    return this.http.delete(`${environment.BASE_URL}/movielists/${listToDelete.id}`).toPromise();
  }

  delete(listToDelete: List) {
    this._deleteBackend(listToDelete)
      .then(() => {
      const newLists = this.lists;
       newLists.forEach((list, index) => {
          if (list === listToDelete) {
            newLists.splice(index, 1);
          }
        });

        this._lists$.next(newLists);

        if (listToDelete === this.currentListService.list) {
          this.currentListService.list = this.lists[0];
        }
      }
      );

  }
}
