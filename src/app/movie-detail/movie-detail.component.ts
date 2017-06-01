import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TMDBMovieService } from '../tmdb.service';
import { Movie } from '../tmdb.service';

@Component({
  selector: 'app-movie-detail',
  template: `
  <div *ngIf="movie">
    <div class="title"> {{ movie.title }} <span class="year"> {{ movie.year }} </span> </div>
    <div class="tagline"> {{ movie.tagline }} </div>
    <div (click)="goToDirectorMovieList(director.name, director.id)" *ngFor="let director of directors"> {{director.name}}</div>
    <div class="overview"> {{ movie.overview }}</div>
    <img [src]="movie.posterPath"/>
  </div>
  `,
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: number;
  movie: Movie;
  directors: {
    id: number;
    name: string;
  }[];

  constructor(private route: ActivatedRoute, private tmdbMovieService: TMDBMovieService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.movieId = params['movieid']);

    const callMovie = () => {
      this.tmdbMovieService.getMoviePrimaryInfo(this.movieId).then((movie) => this.movie = movie).catch(callMovie);
    };
    callMovie();

    const callDirectors = () => {
      this.tmdbMovieService.getMovieDirectors(this.movieId).then((directors) => this.directors = directors).catch(callDirectors);
    };

    callDirectors();
  }

  goToDirectorMovieList(name, id) {
    this.router.navigate([`${name}/${id}/movies`]);
  }



}
