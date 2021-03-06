import { Component, OnInit } from '@angular/core';
import { UserService, LogedIn } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-log-in-out-link',
  template: `
      <div class="logout-button" *ngIf="(logedIn$ | async).logedIn; else login_link">
        <div (click)="logOut()"> Logout </div>
      </div>
      <ng-template #login_link>
        <div class="login-link" routerLink="login" routerLinkActive="active"> Login </div>
      </ng-template>
  `,
  styleUrls: ['./log-in-out-link.component.scss']
})
export class LogInOutLinkComponent implements OnInit {
  logedIn$: Observable<LogedIn>;

  constructor(private userService: UserService, private router: Router, private listsService: ListsService) {
    this.logedIn$ = userService.logedIn$;
  }

  ngOnInit() {
  }

  logOut() {
    this.userService.logout()
    .then(() => this.listsService.load())
    .then(() => {
      this.router.navigate(['home']); });
  }

}
