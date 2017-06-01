import { Component } from '@angular/core';
import { MovieListsService } from './movie-lists.service';

@Component({
  selector: 'app-root',
  template: `
    <div id="header">
      <span  (click)="toggleBarView()" id="toggle-bar-view-button"> ≡ </span>
      MovieLists
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
