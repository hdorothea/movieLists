import { Component, OnInit } from '@angular/core';
import { MovieList, CurrentMovieListService } from '../movie-lists.service';




@Component({
  selector: 'app-movie-list',
  template: `
  <div *ngIf="movieList">
    <div class="element" *ngFor="let movieId of movieList.movieIds" (mouseover)="deletable = true" (mouseout)="deletable =  false">
      <app-movie [movieId]="movieId">
      </app-movie>
      <span class="x" [style.visibility]="deletable ? 'visible':'hidden'" (click)="removeMovieFromList(movieId)"> x </span>
    </div>
  </div>
  `,
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  deletable = false;

  get movieList() {
    return this.currentMovieListService.movieList;
  }

  constructor(private currentMovieListService: CurrentMovieListService) {
  }

  ngOnInit() {
  }

  removeMovieFromList(movieId: number) {
    this.currentMovieListService.removeMovie(movieId);

  }

}
