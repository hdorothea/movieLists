import { Component, OnInit, Input } from '@angular/core';
import { MovieList, MovieListsService, CurrentMovieListService} from '../movie-lists.service';

// this component is for when we already have the title of a movieList
// and we want to be able to update it on doubleclick and delete it on
// pressing x

@Component({
  selector: 'app-movie-list-title-element',
  template: `
    <div [class.selected]="movieList === currentMovieList" 
        class="element" (mouseover)="deletable = true" (mouseout)="deletable = false">
      <div
      (click)="setCurrentMovieList()"> 
        {{movieList.title}}
      </div>
      <app-movie-list-bar-image-element [movieList]="movieList"></app-movie-list-bar-image-element>
      <span class="x" [style.visibility]="deletable ? 'visible' : 'hidden'" (click)="deleteMovieList()">x</span>
    </div>
  `,
  styleUrls: ['./movie-list-title-element.component.scss']
})
export class MovieListTitleElementComponent implements OnInit {
  @Input()
  movieList;

  deletable = false;

  get currentMovieList() {
    return this.currentMovieListService.movieList;
  }


  enableDelete() {
    this.deletable = true;
  }

  disableDelete() {
    this.deletable = false;
  }

  constructor(private movieListsService: MovieListsService, private currentMovieListService: CurrentMovieListService) { }

  setCurrentMovieList() {
    this.currentMovieListService.movieList = this.movieList;

  }


  deleteMovieList() {
    this.movieListsService.delete(this.movieList);
  }

  ngOnInit() {
  }


}
