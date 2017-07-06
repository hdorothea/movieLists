import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { CurrentListService } from '../current-list.service';
import { Movie } from '../movie.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-movie-detail',
  template: `
    <app-movie-detail-view [movie]="movieBS | async">
    </app-movie-detail-view>
  `,
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: number;
  movieBS: BehaviorSubject <Movie>;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private currentListService: CurrentListService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = Number(params['movieid']);
      const allMovieIds = this.currentListService.getList().movieIds;
      for (let i = 0; i < allMovieIds.length; i++) {
        const id = allMovieIds[i];
        if (this.movieId === id) {
          this.movieBS = this.currentListService.getList().movieBSs[i];
          return;
        }
      }

      this.movieBS = this.movieService.getMovieBS(this.movieId);
  });
  }
}
