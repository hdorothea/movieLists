import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { validateUsernameUnique, validatePasswordConfirmed } from './validators';
import { UserService } from '../user.service'

@Component({
  selector: 'app-signup',
  template: `
    <form class="signup-form"[formGroup]="signupForm" novallidate>
      <input type="text" formControlName="username" placeholder="username" (keyup.enter)="submit()"/>
      <input type="text" formControlName="password" placeholder="password"(keyup.enter)="submit()"/>
      <input type="text" formControlName="confirmedPassword" placeholder="confirm password" (keyup.enter)="submit()"/>
    </form>
    <app-form-error-banner [errors]="errors"></app-form-error-banner>
  `,
  providers: [UserService],
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errors: Set<string> = new Set();


  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signupForm = this.formBuilder.group({
      'username': [''],
      'password': [''],
      'confirmedPassword': ['']
    });
  }

  ngOnInit() {
  }

  checkValidity(signupData) {
    // synchronous checks
    if (signupData.username.length < 8) {
      this.errors.add('Username needs to be at least 8 characters long');
    }

    if (signupData.password.length < 8) {
      this.errors.add('Password needs to be at least 8 characters long');
    }

    if (signupData.confirmedPassword !== signupData.password) {
      this.errors.add('Passwords need to match');
    }

  }

  submit() {
    this.errors = new Set();
    this.checkValidity(this.signupForm.value);
    if (this.errors.size < 1) {
      this.userService.checkUserExists(this.signupForm.value.username)
        .then((data) => {
          if (data.exists) {
            this.errors.add('Username already exists. Pick a different one.');
          }
        })
        .then(() => {
          if (this.errors.size < 1) {
            this.userService.signup(this.signupForm.value);
          }
        });
    }
  }
}
