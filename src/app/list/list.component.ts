import { Component, OnInit } from '@angular/core';
import { CurrentListService } from '../current-list.service';
import { Observable } from 'rxjs/Observable';
import { List, ListsService } from '../lists.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-list',
  template: `
    <app-list-view [list]="(list$ | async)"></app-list-view>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$: Observable<List>;

  constructor(private currentListService: CurrentListService,
  private listsService: ListsService,
  private activatedRoute: ActivatedRoute,
  private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.listsService.setCurrentListFromId(params['listid']);
      if (!this.currentListService.getList()) {
        this.router.navigate([``]);
      }
    });
    this.list$ = this.currentListService.list$;
  }
}
