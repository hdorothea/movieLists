import { Component, OnInit } from '@angular/core';
import { MovieList, MovieListsService } from '../movie-lists.service';

@Component({
  selector: 'app-movie-list-bar',
  template: `
  <div class="title-listing">
    <div *ngFor="let movieList of movieLists"> 
      <app-movie-list-title-element [movieList]="movieList">
      </app-movie-list-title-element>
    </div>
  </div>
  `,
  styleUrls: ['./movie-list-bar.component.scss']
})
export class MovieListBarComponent implements OnInit {
  movieLists: MovieList[];

  constructor(private movieListsService: MovieListsService) {
  }

  ngOnInit() {
    this.movieLists = this.movieListsService.movieLists;
  }

}
