import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Movie } from '../movie.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie',
  template: `
    <img [src]="posterPath | async" (click)="goToMovieDetail()"/>
  `,
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  posterPath: Observable<string>;
  @Input()
  movieId;

  goToMovieDetail() {
    this.router.navigate([`detail/${this.movieId}`]);
  }

  constructor(public movieService: MovieService, private router: Router) { }


  ngOnInit() {
    this.posterPath = this.movieService.getMoviePosterPath(this.movieId);
    this.posterPath.subscribe((pp) => console.log(pp));
  }
}
