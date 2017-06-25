import { Component } from '@angular/core';
import { ShowLioliService } from './show-lioli.service';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-root',
  template: `
    <app-view [showLioli]="(showLioli$ | async)"></app-view>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [ShowLioliService]
})
export class AppComponent {
  showLioli$;

  constructor(private showLioliService: ShowLioliService) {
    this.showLioli$ = this.showLioliService.showLioli$;
  };
}
