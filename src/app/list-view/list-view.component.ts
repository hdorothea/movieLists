import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  template: `
    <div *ngIf="list">
      <app-list-element *ngFor="let movieId of list.movieIds" [movieId]="movieId"></app-list-element>
    </div>
  `,
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input()
  list;

  constructor() { }

  ngOnInit() {
  }

}
