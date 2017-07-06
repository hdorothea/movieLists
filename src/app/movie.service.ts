import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export interface Movie {
  'id': number;
  'title': string;
  'posterPath': string;
  'logoPath': string[];
  'year': string;
  'overview': string;
  'tagline': string;
  'directors': string[];
}

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  query(query: string) {
    return this.http.get(`${environment.BASE_URL}/movies/search?query=${query}`).map((res) => res.json());
  }

  getMovieBS(movieId: number): BehaviorSubject<Movie> {
    const _movie$ = new BehaviorSubject({
      'id': movieId,
      'title': undefined,
      'posterPath': undefined,
      'logoPath': undefined,
      'year': undefined,
      'overview': undefined,
      'tagline': undefined,
      'directors': undefined
    });
    this.getMovie(movieId).subscribe((movie) => { _movie$.next(movie); });
    return _movie$;
  }

  getMovieBSsFromId(movieIds: number[]): BehaviorSubject<Movie>[] {
    const movieBSs = [];
    for (const movieId of movieIds) {
      movieBSs.push(this.getMovieBS(movieId));
    }
    return movieBSs;
  }

  getMovie(id: number) {
    return this.http.get(`${environment.BASE_URL}/movies/${id}`).map((res) => res.json());
  }

  getDirectorMoviesIds(directorId: number) {
    return this.http.get(`${environment.BASE_URL}/movies/director/${directorId}`).map((res) => res.json());
  }

  getDirectors(movieId: number) {
    return this.http.get(`${environment.BASE_URL}/movies/directors/movie/${movieId}`).map((res) => res.json());
  }

}
