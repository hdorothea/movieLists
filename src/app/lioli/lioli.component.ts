import { Component, OnInit } from '@angular/core';
import { List, ListsService } from '../lists.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lioli',
  template: `
  <div class="lioli">
    <app-lioli-element *ngFor="let list of (lists$ | async)" [list]="list">
    </app-lioli-element>
  </div>
  `,
  styleUrls: ['./lioli.component.scss']
})
export class LioliComponent implements OnInit {
  lists$: Observable<List[]>;

  constructor(private listsService: ListsService) {
  }

  ngOnInit() {
    this.lists$ = this.listsService.lists$;
  }

}
