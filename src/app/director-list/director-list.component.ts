import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { List, createNewList } from '../lists.service';

@Component({
  selector: 'app-director-list',
  template: `
    <app-readonly-list [list]="list"></app-readonly-list>

  `,
  styleUrls: ['./director-list.component.scss']
})
export class DirectorListComponent implements OnInit {
  directorId: number;
  list: List = createNewList();


  constructor(private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.directorId = params['directorid'];
      this.list.title = params['directorname'];
    });


    this.movieService
      .getDirectorMovies(this.directorId)
      .subscribe((movieIds) => {
        this.list.movieIds = movieIds;
      });
  };

}
