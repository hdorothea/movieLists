import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-view',
  template: `
    <app-movie-list-title-input></app-movie-list-title-input>
    <app-movie-list-bar></app-movie-list-bar>
  `,
  styleUrls: ['./bar-view.component.scss']
})
export class BarViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
