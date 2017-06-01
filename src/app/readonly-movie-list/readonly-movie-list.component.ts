import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDBPersonService } from '../tmdb.service';
import { MovieListsService } from '../movie-lists.service';

@Component({
  selector: 'app-readonly-movie-list',
  template: `
    <div> {{ title }} </div>
    <div (click)="addToMovieLists()"> Add to lists </div>
    <app-movie [movieId]="movieId" *ngFor="let movieId of movieIds"></app-movie>
  `,
  styleUrls: ['./readonly-movie-list.component.scss']
})
export class ReadonlyMovieListComponent implements OnInit {
  title: string;
  movieIds;
  directorId;

  constructor(private route: ActivatedRoute, 
              private tmdbPersonService: TMDBPersonService,
              private movieListsService: MovieListsService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {this.title = params['title'];
                                             this.directorId = params['id']; });

    const call = () => {
      this.tmdbPersonService.getMovieIds(this.directorId).then((movieIds) => this.movieIds = movieIds).catch(call);
    };
    call();
  }

  addToMovieLists() {
    this.movieListsService.add(`Films directed by: ${this.title}`, this.movieIds);

  }



}
