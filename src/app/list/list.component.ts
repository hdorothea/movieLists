import { Component, OnInit } from '@angular/core';
import { CurrentListService } from '../current-list.service';
import { Observable } from 'rxjs/Observable';
import { List } from '../lists.service';




@Component({
  selector: 'app-list',
  template: `
    <app-list-view [list]="(list$ | async)"></app-list-view>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$: Observable<List>;

  constructor(private currentListService: CurrentListService) {
  }

  ngOnInit() {
    this.list$ = this.currentListService.list$;
  }


}
