import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
    <app-header></app-header>
    <div class="content">
      <app-lioli-container [class]="showLioli? 'show':'hide'"></app-lioli-container>
      <router-outlet></router-outlet>
    </div>
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
