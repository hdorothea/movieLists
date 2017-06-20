import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ShowLoginService } from '../show-login.service';


@Component({
  selector: 'app-login',
  template: `
  <div (focusout)="unsetShowLogin()">
    <form [formGroup]="loginForm" novallidate (ngSubmit)="submit()">
        <input formControlName="username" type="text" placeholder="user name"/>
        <input formControlName="password" type="password" placeholder="password"/>
        <input type="submit"/>
    </form>
    <div>
      No account yet?
      <a routerLink="signup" routerLinkActive="active"> Sign up!</a>
    </div>
  </div>


  `,
  providers: [UserService] ,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userservice: UserService, private showLoginService: ShowLoginService) {
    this.loginForm = this.formBuilder.group({
      'username': [''],
      'password': [''],
    });
  }

  ngOnInit() {
  }

  submit() {
    this.userservice.login(this.loginForm.value);
  }

  unsetShowLogin() {
    this.showLoginService.setShowLogin(false);
  }

}
