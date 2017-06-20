import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
import { CurrentListService } from '../current-list.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-movie-search',
  template: `
    <div class="search-box" (mouseleave)="results =[]">
        <div id="input-box">
          <input #searchinput [formControl]="movieQuerry"
          type="text" [placeholder]="activeResult ? activeResult.title: ''"
          (keydown.arrowdown)="incrementActiveIndex()" (keydown.arrowdown)="$event.preventDefault()"
          (keydown.arrowup)="decrementActiveIndex()" (keydown.arrowup)="$event.preventDefault()"
          (keydown.enter)="addMovieToList()"/>
          <img (click)="addMovieToList()" id="search-icon" src='../../assets/search_icon.png'/>
        </div>
        <div tabindex=-1 class="suggestion-box">
          <div class="suggestion-element" (mouseover)="activeIndex = i; searchinput.focus()" #movieOption
          (click)="addMovieToList()"
          (keydown.arrowdown)="incrementActiveIndex()"
          (keydown.arrowup)="decrementActiveIndex()"
          *ngFor="let item of results; let i=index" [style.background-color]="i === activeIndex ? 'gainsboro' : 'white'">
            <div class="movie-title"> {{item.title}} <span> {{item.year}} </span> </div>
            <img class="movie-logo" *ngIf="item.posterPath" [src]="item.posterPath"/>
          </div>
        </div>
      </div>
  `,
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
    results: {
    'title': string,
    'logoPath': string,
    'id': number,
    'year': string,
  }[] = [];


  movieQuerry = new FormControl();

  private activeIndex = 0;

  constructor(private currentListService: CurrentListService,
              private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieQuerry.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap((movieQuerry) => this.movieService.query(movieQuerry))
                 .subscribe((results) => this.results = results, (err) => this.results = []);
  }

  get activeResult() {
    return this.results[this.activeIndex];
  }

  correctActiveIndex() {
    if (this.activeIndex > this.results.length - 1) {
      this.activeIndex = 0;

    }

    if (this.activeIndex < 0) {
      this.activeIndex = this.results.length - 1;
    }
  }

  decrementActiveIndex() {
    --this.activeIndex;
    this.correctActiveIndex();
  }

  incrementActiveIndex() {
    ++this.activeIndex;
    this.correctActiveIndex();
  }

  reset() {
    this.movieQuerry.setValue('');
    this.activeIndex = 0;
  }


  addMovieToList() {
    if (this.activeResult) {
      this.currentListService.addMovie(this.activeResult.id);
    } else {
      console.log('Sorry your search did not turn up any results');
    }

    this.reset();
  };

}
