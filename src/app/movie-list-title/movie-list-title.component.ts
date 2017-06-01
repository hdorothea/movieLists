import { Component, OnInit } from '@angular/core';
import { CurrentMovieListService } from '../movie-lists.service';

@Component({
  selector: 'app-movie-list-title',
  template: `
    <input
    #movieListTitle
    [(ngModel)]="movieList.title" 
    (dblclick)="enableEdit()"
    [readOnly]="!editable ? true : null">
  `,
  styleUrls: ['./movie-list-title.component.scss']
})
export class MovieListTitleComponent implements OnInit {
  editable = false;

  get movieList() {
    return this.currentMovieListService.movieList;
  }

  constructor(private currentMovieListService: CurrentMovieListService) { }

  updateTitle(inputElement: HTMLInputElement) {
    this.currentMovieListService.updateTitle(inputElement.value);
  }

  enableEdit() {
    this.editable = true;
  }

  disableEdit() {
    this.editable = false;
  }

  ngOnInit() {
  }


}
