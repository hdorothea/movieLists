import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { validateUsernameUnique, validatePasswordConfirmed } from './validators';

@Component({
  selector: 'app-signup',
  template: `
    <form [formGroup]="signupForm" novallidate (ngSubmit)="submit()">
      <input type="text" formControlName="username" placeholder="username"/>
      <div *ngIf="signupForm.controls.username.errors">
        <div *ngIf="signupForm.controls.username.errors.required && signupForm.controls.username.touched">
          Username is required
        </div>
        <div *ngIf="signupForm.controls.username.errors.minlength && signupForm.controls.username.touched">
          Username needs to be at least {{signupForm.controls.username.errors.minlength['requiredLength']}} characters long
        </div>
      </div>
      <form [formGroup]="signupForm.get('passwords')">
        <input type="text" formControlName="password" placeholder="password"/>
        <div *ngIf="signupForm.get('passwords').controls.password.errors">
          <div 
          *ngIf="signupForm.get('passwords').controls.password.errors.required && signupForm.get('passwords').controls.password.touched">
            Password is required
          </div>
          <div 
          *ngIf="signupForm.get('passwords').controls.password.errors.minlength && signupForm.get('passwords').controls.password.touched">
            Password needs to be at least 
            {{signupForm.get('passwords').controls.password.errors.minlength['requiredLength']}} 
            characters long
          </div>
        </div>
        <input type="text" formControlName="confirmedPassword" placeholder="confirm password"/>
        <div *ngIf="signupForm.get('passwords').errors && signupForm.get('passwords').controls.confirmedPassword.touched">
          Passwords need to match
        </div>
      </form>
      <input type="submit"/>
    </form>
  `,
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  username: string;

  constructor(private formBuilder: FormBuilder) { }

  minlength() {

  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.minLength(8)], [validateUsernameUnique]],
      'passwords': this.formBuilder.group({
        'password': ['', [Validators.required, Validators.minLength(8)]],
        'confirmedPassword': ['', [Validators.required, Validators.minLength(8)]]
      }, {validator: validatePasswordConfirmed})
    }
    );

  }

  submit() {
    // check that the username is unique
    // check that both the passwords are the same and long enough
    console.log(this.signupForm);

  }

}
