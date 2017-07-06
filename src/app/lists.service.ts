import { Injectable } from '@angular/core';
import { guid } from './utilities';
import { environment } from '../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { CurrentListService } from './current-list.service';
import { MovieService, Movie } from './movie.service';

export interface List {
  'title': String;
  'movieIds': Number[];
  'id': String;
  'movieBSs': BehaviorSubject<Movie>[];
};

@Injectable()
export class ListsService {
  private _lists$: BehaviorSubject<List[]>;
  lists$: Observable<List[]>;
  firstLists: Promise<List[]>;

  constructor(private http: Http,
    private currentListService: CurrentListService,
    private router: Router,
    private movieService: MovieService) {
    this._lists$ = new BehaviorSubject([]);
    this.lists$ = this._lists$.asObservable();
    this.firstLists = this.lists$.first(value => value.length > 0).toPromise();
    this.load();
  }

  createNewList(title: String = 'MovieList', movieIds: number[] = []) {
    const newList = {
      'title': title,
      'movieIds': movieIds,
      'id': guid(),
      'movieBSs': this.movieService.getMovieBSsFromId(movieIds)
    };
    return newList;
  }

  setCurrentListFromId(id: string) {
    this.firstLists
    .then(() => {
      for (const list of this.getLists()) {
        if (list.id === id) {
          this.currentListService.setList(list);
          return;
        }
      }
      this.router.navigate([`list/${this.getLists()[0].id}`]);
    });
  }

  getLists() {
    return this._lists$.getValue();
  }

  load() {
    return this.fetchListsBackend().toPromise().then((lists) => this._lists$.next(lists));
  }

  fetchListsBackend() {
    return this.http.get(environment.BASE_URL + '/movielists')
      .map((res) => res.json())
      .map((movieLists) => {
        return movieLists.map((movieList) => {
          movieList.movieBSs = this.movieService.getMovieBSsFromId(movieList.movieIds);
          return movieList;
        });
      });
  }


  addNewList(title: String = 'MovieList', movieIds: number[] = []) {
    const newMovieList = this.createNewList(title, movieIds);
    this.add(newMovieList);
  }

  _addBackend(list: List) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${environment.BASE_URL}/movielists/${list.id}`,
      {
        'id': list.id,
        'title': list.title,
        'movieIds': list.movieIds
      },
      options)
      .toPromise();
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

  getDirectorList(listTitle: string, directorId: number) {
    return this.movieService.getDirectorMoviesIds(directorId)
      .map((movieIds) => this.createNewList(listTitle, movieIds));
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

        if (listToDelete.id === this.currentListService.getList().id) {
          this.router.navigate([``]);
        }
      }
      );

  }
}
