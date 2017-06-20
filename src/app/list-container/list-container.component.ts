import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-container',
  template: `
    <app-list-title></app-list-title>
    <app-movie-search></app-movie-search>
    <app-list></app-list>
  `,
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
