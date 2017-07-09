import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-director-link',
  template: `
    <div *ngIf="directors && directors.length > 0" class="director-link"> Directed by:
      <div *ngFor="let director of directors">
        <span class="link" (click)="goToDirectorMovieList(director.name, director.id)">
          {{director.name}}
        </span>
        &nbsp;
      </div>
    </div>
  `,
  styleUrls: ['./director-link.component.scss']
})
export class DirectorLinkComponent implements OnInit {
  @Input()
  movieId;

  directors;

  constructor(private router: Router, private movieService: MovieService) {
  }

  ngOnInit() {
    this.directors = this.movieService
    .getDirectors(this.movieId)
    .subscribe(directors => {this.directors = directors; });
  }

  goToDirectorMovieList(name, id) {
    this.router.navigate([`directorlist/${name}/${id}`]);
  }

}
