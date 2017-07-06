import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Movie } from '../movie.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie',
  template: `
    <img [src]="posterPath" (click)="goToMovieDetail()"/>
  `,
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieId;
  posterPath;
  @Input()
  movieBS;

  goToMovieDetail() {
    this.router.navigate([`detail/${this.movieId}`]);
  }

  constructor(public movieService: MovieService, private router: Router) { }


  ngOnInit() {
    this.movieBS.subscribe((movie) => {
      this.movieId = movie.id;
      this.posterPath = movie.posterPath;
    });
  }
}
