import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  template: `
  <div (click)="showLogin = !showLogin" id="login-button">Login</div>
  <div (focusout)="showLogin = false" [class]="showLogin? 'show':'hide'" class="login-form">
    <div>
      <span>Username</span>
      <input type="text"/>
    </div>
    <div>
      <span>Password</span>
      <input type="password"/>
    </div>
    <div> No account yet? <a routerLink="signup" routerLinkActive="active"> Sign up!</a></div>
  </div>

  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showLogin = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

}
