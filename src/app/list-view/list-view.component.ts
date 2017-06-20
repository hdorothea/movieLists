import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  template: `
    <app-list-element *ngFor="let movieId of list.movieIds" [movieId]="movieId"></app-list-element>
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
