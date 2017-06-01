import { Component, OnInit } from '@angular/core';
import { MovieList, MovieListsService, CurrentMovieListService } from '../movie-lists.service';

@Component({
  selector: 'app-movie-list-title-input',
  template: `
    <div class="title-input">
      <input #newListTitleInput (keyup.enter)="addNewList(newListTitleInput)" placeholder="New List"/>
      <span (click)=addNewList(newListTitleInput) id="plus-icon">+</span>
    <div>
  `,
  styleUrls: ['./movie-list-title-input.component.scss'],
})
export class MovieListTitleInputComponent implements OnInit {

  constructor(private movieListsService: MovieListsService) {
  }

  ngOnInit() {
  }

  addNewList(inputElement: HTMLInputElement) {
    this.movieListsService.add(inputElement.value ? inputElement.value : 'New List');
    inputElement.value = '';
  }

}
