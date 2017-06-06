import { Component } from '@angular/core';
import { MovieListsService } from './movie-lists.service';

@Component({
  selector: 'app-root',
  template: `
    <div id="header">
      <span class="app-title" (click)="toggleBarView()" id="toggle-bar-view-button"> ≡ </span>
      <span class="app-title"> MovieLists </span>
      <app-login></app-login>
    </div>
    <app-bar-view [class]="showBar? 'show':'hide'"></app-bar-view>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showBar = ((window.innerWidth < 750) ? false : true);

  constructor() {
  }

  toggleBarView() {
    this.showBar = !this.showBar;
  }


}
