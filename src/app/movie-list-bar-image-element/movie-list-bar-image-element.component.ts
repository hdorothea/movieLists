import { Component, OnInit, Input } from '@angular/core';
import { TMDBMovieService } from '../tmdb.service';


@Component({
  selector: 'app-movie-list-bar-image-element',
  template: `
    <div class="bar-image">
      <img *ngFor="let logoPath of movieLogoPaths" [src]="logoPath"/>
    </div>
  `,
  styleUrls: ['./movie-list-bar-image-element.component.scss']
})
export class MovieListBarImageElementComponent implements OnInit {
  @Input()
  movieList;

  movieLogoPaths: string[] = [];

  constructor(private tmdbMovieService: TMDBMovieService) { }

  ngOnInit() {
    this.movieList.movieIds.slice(0, 4).map((movieId) => {
      const call = () => {
        this.tmdbMovieService.getMoviePrimaryInfo(movieId, false)
          .then((movieInfo) => {
            this.movieLogoPaths.push(movieInfo.posterPath); }).catch(call);
      };

      call();

    }
    );
  }

}
