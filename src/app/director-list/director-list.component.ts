import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService, List } from '../lists.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-director-list',
  template: `
    <app-readonly-list [list]="(list$ | async)"></app-readonly-list>

  `,
  styleUrls: ['./director-list.component.scss']
})
export class DirectorListComponent implements OnInit {
  list$: Observable<List>;

  constructor(private route: ActivatedRoute,
    private listsService: ListsService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.list$ = this.listsService.getDirectorList(params['directorname'], params['directorid']);
    });
  };

}
