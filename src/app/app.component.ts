import { Component } from '@angular/core';
import { ShowLioliService } from './show-lioli.service';
import { ShowLoginService } from './show-login.service';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-root',
  template: `
    <app-view  [showLogin]="(showLogin$ | async)" [showLioli]="(showLioli$ | async)"></app-view>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [ShowLioliService, ShowLoginService]
})
export class AppComponent {
  showLioli$;
  showLogin$;

  constructor(private showLioliService: ShowLioliService, private showLoginService: ShowLoginService) {
    this.showLogin$ = this.showLoginService.showLogin$;
    this.showLioli$ = this.showLioliService.showLioli$;
  };
}
