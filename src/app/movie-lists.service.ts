import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { guid } from './utilities';


export interface MovieList {
  'title': String;
  'movieIds': Number[];
  'id': String;
};


const fakeMovieLists: MovieList[] = [{
    title: 'Boring Movies',
    movieIds: [500, 11878, 947, 11400],
    'id': '1579812'
  },
  {
    title: 'Quirky Movies',
    movieIds: [83666, 194, 120467, 4538],
    'id': '8394488'
  }
];


@Injectable()
export class CurrentMovieListService {
  private _movieList: MovieList;

  set movieList(movieList: MovieList) {
    this._movieList = movieList;
    this.router.navigate([`${this.movieList.id}`]);
  }

  get movieList() {
    return this._movieList;
  }

  constructor(private router: Router) {}


  updateTitle(title: string) {
    this.movieList.title = title;
  }

  addMovie(movieIdToAdd: number) {
    this.movieList.movieIds.push(movieIdToAdd);
  }

  removeMovie(movieIdToDelete: number) {
    this.movieList.movieIds.forEach((id, index) => {
      if (movieIdToDelete === id) {
           this.movieList.movieIds.splice(index, 1);
      }
    });
  }
}


@Injectable()
export class MovieListsService{
  movieLists: MovieList[];

  constructor(private currentMovieListService: CurrentMovieListService) {
    this.movieLists = fakeMovieLists;
    this.currentMovieListService.movieList = this.movieLists[0];
  }



  add(title: String = 'MovieList', movieIds: number[] = []) {
      const newMovieList = {
      'title': title,
      'movieIds': movieIds,
      'id': guid()
      };

    this.movieLists.push(newMovieList);
    this.currentMovieListService.movieList = newMovieList;
  }

  delete(movieListToDelete: MovieList) {
    this.movieLists.forEach((movieList, index) => {
      if (movieList === movieListToDelete) {
        this.movieLists.splice(index, 1);
      }
    });

    if (movieListToDelete === this.currentMovieListService.movieList) {
      this.currentMovieListService.movieList = this.movieLists[0];
    }
  }
}
