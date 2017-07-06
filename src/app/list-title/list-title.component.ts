import { Component, OnInit } from '@angular/core';
import { CurrentListService } from '../current-list.service';
import { Observable } from 'rxjs/Observable';
import { List } from '../lists.service';

@Component({
  selector: 'app-list-title',
  template: `
    <input maxlength=26
    #listTitle
    [value]="(list$ | async)?.title"
    (dblclick)="this.editable = true"
    [readOnly]="!editable? true : null"
    (keyup.enter)="updateTitle(listTitle)"
    >
  `,
  styleUrls: ['./list-title.component.scss']
})
export class ListTitleComponent implements OnInit {
  list$: Observable<List>;
  editable = false;

  constructor(private currentListService: CurrentListService) {
    this.list$ = this.currentListService.list$;
  }

  updateTitle(inputElement: HTMLInputElement) {
    this.currentListService.updateTitle(inputElement.value);
    this.editable = false;
  }

  ngOnInit() {
  }


}
