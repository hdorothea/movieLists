import { Injectable } from '@angular/core';
import { guid } from './utilities';
import { environment } from '../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CurrentListService } from './current-list.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

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

  constructor(private http: Http, private currentListService: CurrentListService, private router: Router) {
    this.load();
  }

  setCurrentListFromId(id: string) {
    for (const list of this._lists$.getValue()) {
      if (list.id === id) {
        this.currentListService.setList(list);
        return;
      }
    }
  }

  getLists() {
    return this._lists$.getValue();
  }

  load() {
    this._lists$ = new BehaviorSubject(undefined);
    this.lists$ = this._lists$.asObservable();
    this.fetchListsBackend().subscribe((lists) => this._lists$.next(lists));
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
        const newLists = this.getLists();
        newLists.push(list);
        this._lists$.next(newLists);
        this.router.navigate([`list/${list.id}`]);
      });
  }

  _deleteBackend(listToDelete: List) {
    return this.http.delete(`${environment.BASE_URL}/movielists/${listToDelete.id}`).toPromise();
  }

  delete(listToDelete: List) {
    this._deleteBackend(listToDelete)
      .then(() => {
      const newLists = this.getLists();
       newLists.forEach((list, index) => {
          if (list === listToDelete) {
            newLists.splice(index, 1);
          }
        });

        this._lists$.next(newLists);

        if (listToDelete === this.currentListService.getList()) {
          this.router.navigate([`list/{this.getLists()[0].id}`]);
        }
      }
      );

  }
}
