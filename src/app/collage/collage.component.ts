import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-collage',
  template: `
    <div class="bar-image">
      <img *ngFor="let movieLogoPath of movieLogoPaths" [src]="movieLogoPath | async"/>
    </div>
  `,
  styleUrls: ['./collage.component.scss']
})
export class CollageComponent implements OnInit {
  movieLogoPaths: Observable<string>[];
  movieIds: number[];

  @Input()
  list;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieIds = this.list.movieIds.slice(0, 4);
    this.movieLogoPaths = this.movieIds.map((movieId) => this.movieService.getMovieLogoPath(movieId));
  }

}
