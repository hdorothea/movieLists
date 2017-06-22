import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

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

  getMovie(id: number) {
    return this.http.get(`${environment.BASE_URL}/movies/${id}`).map((res) => res.json());
  }

  getMovieLogoPath(id: number) {
    return this.getMovie(id).pluck('logoPath');
  }

  getMoviePosterPath(id: number) {
    return this.getMovie(id).pluck('posterPath');
  }

  getDirectorMovies(directorId: number) {
    return this.http.get(`${environment.BASE_URL}/movies/director/${directorId}`).map((res) => res.json());
  }

  getDirectors(movieId: number) {
    return this.http.get(`${environment.BASE_URL}/directors/movie/${movieId}`).map((res) => res.json());
  }

}
