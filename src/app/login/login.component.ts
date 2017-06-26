import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ListsService } from '../lists.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  template: `
    <div class="host">
       <div class="login-title"> Login </div>
      <form [formGroup]="loginForm" novallidate>
          <input formControlName="username" type="text" placeholder="username" (keyup.enter)="submit()"/>
          <input formControlName="password" type="password" placeholder="password" (keyup.enter)="submit()"/>
          <app-form-error-banner [errors]="errors"></app-form-error-banner>
          <div class="submit-button" (click)=submit()> Submit </div>
      </form>
      <div class="no-account-yet">
        No account yet?
        <a routerLink="/signup" routerLinkActive="active"> Sign up!</a>
      </div>
    </div>

  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: Set<string> = new Set();


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private listsService: ListsService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      'username': [''],
      'password': [''],
    });
  }

  ngOnInit() {
  }

  submit() {
    this.errors = new Set();
    this.userService.checkUserExists(this.loginForm.value.username)
      .then((data) => {
        if (!data.exists) {
          this.errors.add('Wrong username');
        } else {
          return this.userService.checkCorrectPassword(this.loginForm.value);
        }
      })
      .then((data) => {
        if (this.errors.size < 1) {
          if (!data.matches) {
            this.errors.add('Username and password do not match');
          }
        }
      })
      .then(() => {
        if (this.errors.size < 1) {
          return this.userService.login(this.loginForm.value);
        }
      })
      .then(() => {
        if (this.errors.size < 1) {
          return this.listsService.load();
        }
      })
      .then((lists) => {
         if (this.errors.size < 1) {
          console.log(lists);
          this.router.navigate([``]);
         }
      }
      );
  }
}
