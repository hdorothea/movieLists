import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie-detail',
  template: `
    <app-movie-detail-view [movie]="movie | async">
    </app-movie-detail-view>
  `,
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: number;
  movie: Observable <Movie>;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.movieId = params['movieid']);
    this.movie = this.movieService.getMovie(this.movieId);
  }
}
