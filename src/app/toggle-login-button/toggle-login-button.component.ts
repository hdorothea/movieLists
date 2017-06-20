import { Component, OnInit } from '@angular/core';
import { ShowLoginService } from '../show-login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-toggle-login-button',
  template: `
  <div class="toggle-login-button" (click)="toggleLogin()"> Login </div>
  `,
  styleUrls: ['./toggle-login-button.component.scss']
})
export class ToggleLoginButtonComponent implements OnInit {

  constructor(private showLoginService: ShowLoginService) { }

  toggleLogin() {
    this.showLoginService.toggleShowLogin();
  }

  ngOnInit() {
  }

}
