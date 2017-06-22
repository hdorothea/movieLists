import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail-view',
  template: `
    <div *ngIf="movie">
      <div class="title"> {{ movie.title }} <span class="year"> {{ movie.year }} </span> </div>
      <div class="tagline"> {{ movie.tagline }} </div>
      <app-director-link [movieId]="movie.id"></app-director-link>
      <div class="overview"> {{ movie.overview }}</div>
      <img [src]="movie.posterPath"/>
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
