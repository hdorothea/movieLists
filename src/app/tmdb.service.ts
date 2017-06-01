import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { config } from './app.config';
import 'rxjs/Rx';

export interface Movie {
  'id': number;
  'title': string;
  'posterPath': string;
  'year': string;
  'overview': string;
  'tagline': string;
}

@Injectable()
export class TMDBBaseService {
  http: Http;
  API_KEY = config.API_KEY;
  CONFIG_BASE_URL = 'https://api.themoviedb.org/3/configuration';
  posterSize = 'w154';
  logoSize = 'w45';
  IMAGE_BASE_URL: string;

  constructor(http: Http) {
    this.http = http;
    this.setConfigs();
  }

  setConfigs() {
    const params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.API_KEY);
    this.http.get(this.CONFIG_BASE_URL, { search: params })
      .first()
      .map((response) => response.json())
      .subscribe(
      (response) => {
        this.IMAGE_BASE_URL = response['images']['base_url'];
      });
  }

  assembleImageLink(posterPath: string, poster= true): string {
    return `${this.IMAGE_BASE_URL}${poster ? this.posterSize : this.logoSize}${posterPath}`;
  }
}

@Injectable()
export class TMDBPersonService {
  tmdbBaseService: TMDBBaseService;
  private BASE_URL = 'https://api.themoviedb.org/3/person/';

   constructor(tmdbBaseservice: TMDBBaseService) {
     this.tmdbBaseService = tmdbBaseservice;
   }

   getMovieIds(personId: Number) {
     const URL = `${this.BASE_URL}${personId}/movie_credits`;
     const params: URLSearchParams = new URLSearchParams();
     params.set('api_key', this.tmdbBaseService.API_KEY);
     return this.tmdbBaseService.http.get(URL, { search: params })
      .map((response) => {
            return response.json()['crew']
              .filter((crewMovie) => crewMovie['job'] === 'Director')
              .map((directorMovie) => directorMovie.id);
            }).toPromise();
      }
}

@Injectable()
export class TMDBMovieService {
   private BASE_URL = 'https://api.themoviedb.org/3/movie/';
   tmdbBaseService: TMDBBaseService;

   constructor(tmdbBaseservice: TMDBBaseService) {
     this.tmdbBaseService = tmdbBaseservice;
   }

   getMovieDirectors(id: Number) {
     const URL = `${this.BASE_URL}${id}/credits`;
     const params: URLSearchParams = new URLSearchParams();
     params.set('api_key', this.tmdbBaseService.API_KEY);
     return this.tmdbBaseService.http.get(URL, { search: params })
      .map((response) => {
        return response.json()['crew']
          .filter((crew) => crew['job'] === 'Director')
          .map((director) => {
            return {
              id: director['id'],
              name: director['name']
            };
          });
      })
      .toPromise();


   }

   getMoviePrimaryInfo(id: Number, poster= true) {
    const URL = `${this.BASE_URL}${id}`;
    const params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.tmdbBaseService.API_KEY);
    return this.tmdbBaseService.http.get(URL, { search: params })
      .map((response) => {
        response = response.json();
        return {'id': response['id'],
                'title': response ['title'],
                'posterPath': (response['poster_path'] ?
                               this.tmdbBaseService.assembleImageLink(response['poster_path'], poster = poster)
                               : response['poster_path']),
                'year': response['release_date'].substring(0, 4),
                'overview': response['overview'],
                'tagline': response['tagline']
              };
      })
      .toPromise();
  }
}

@Injectable()
export class TMDBSearchService {
  tmdbBaseService: TMDBBaseService;
  private BASE_URL = 'https://api.themoviedb.org/3/search/movie';

  constructor(tmdbBaseService: TMDBBaseService) {
    this.tmdbBaseService = tmdbBaseService;
  }

  search(query: string) {
    // searches for movies based on query strings
    if (query === '') {
      return Observable.of([]);
    }
    const params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.tmdbBaseService.API_KEY);
    params.set('query', query);
    return this.tmdbBaseService.http.get(this.BASE_URL, { search: params })
      .map((response) => response.json()['results'].slice(0, 6).map(
        (result) => {
          let posterPath = result['poster_path'];
          if (posterPath) {
            posterPath = this.tmdbBaseService.assembleImageLink(posterPath, false);
          }
          return {
            'title': result['title'],
            'posterPath': posterPath,
            'id': result['id'],
            'year': result['release_date'].substring(0, 4)
          };
        }));
  }
}
