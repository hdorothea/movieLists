import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-director-link',
  template: `
    <div class="director-link"
    *ngFor="let director of (directors$ | async)"
    (click)="goToDirectorMovieList(director.name, director.id)"> Directed by: <span class="link"> {{director.name}} </span> </div>
  `,
  styleUrls: ['./director-link.component.scss']
})
export class DirectorLinkComponent implements OnInit {
  @Input()
  movieId;

  directors$;

  constructor(private router: Router, private movieService: MovieService) {
  }

  ngOnInit() {
    this.directors$ = this.movieService.getDirectors(this.movieId);
  }

  goToDirectorMovieList(name, id) {
    this.router.navigate([`directorlist/${name}/${id}`]);
  }

}
