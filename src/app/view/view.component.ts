import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
    <app-header></app-header>
    <app-lioli-container [class]="showLioli? 'show':'hide'"></app-lioli-container>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input()
  showLioli;

  constructor() { }

  ngOnInit() {
  }

}
