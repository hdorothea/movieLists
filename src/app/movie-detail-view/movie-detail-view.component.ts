import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail-view',
  template: `
    <div class="host" *ngIf="movie">
      <div class="title"> {{ movie.title }} <span class="year"> {{ movie.year }} </span> </div>
      <div class="tagline"> {{ movie.tagline }} </div>
      <app-director-link [movieId]="movie.id"></app-director-link>
      <div class="container">
        <img [src]="movie.posterPath"/>
        <div class="movie-description">
          <div class="overview"> {{ movie.overview }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./movie-detail-view.component.scss']
})
export class MovieDetailViewComponent implements OnInit {
  @Input()
  movie;

  constructor() { }

  ngOnInit() {
  }

}
