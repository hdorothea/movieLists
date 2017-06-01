import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  template: `
    <app-movie-list-title></app-movie-list-title>
    <app-movie-search></app-movie-search>
    <app-movie-list></app-movie-list>
  `,
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
