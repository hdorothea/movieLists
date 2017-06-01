import { Component, OnInit, Input } from '@angular/core';
import {TMDBMovieService } from '../tmdb.service';
import { Router } from '@angular/router';
import { Movie } from '../tmdb.service';

@Component({
  selector: 'app-movie',
  template: `
    <div *ngIf="movie">
      <img [src]="movie.posterPath" (click)="goToMovieDetail()"/>
    </div>
  `,
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input()
  movieId;

  movie: Movie;

  goToMovieDetail() {
    this.router.navigate([`detail/${this.movieId}`]);
  }

  constructor(public tmdbMovieService: TMDBMovieService, private router: Router) { }

  ngOnInit() {
    const call = () => {
      this.tmdbMovieService.getMoviePrimaryInfo(this.movieId).then((movie) => this.movie = movie).catch(call);
    };
    call();

  }

}
