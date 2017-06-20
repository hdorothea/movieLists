import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { validateUsernameUnique, validatePasswordConfirmed } from './validators';
import { UserService } from '../user.service'

@Component({
  selector: 'app-signup',
  template: `
    <form [formGroup]="signupForm" novallidate (ngSubmit)="submit()">
      <input type="text" formControlName="username" placeholder="username"/>
      <div *ngIf="controls.username.errors">
        <div *ngIf="controls.username.errors.required && controls.username.touched">
          Username is required
        </div>
        <div *ngIf="controls.username.errors.minlength && controls.username.touched">
          Username needs to be at least {{controls.username.errors.minlength['requiredLength']}} characters long
        </div>
      </div>
      <input type="text" formControlName="password" placeholder="password"/>
      <div *ngIf="controls.password.errors">
        <div 
        *ngIf="controls.password.errors.required && controls.password.touched">
          Password is required
        </div>
        <div 
        *ngIf="controls.password.errors.minlength && controls.password.touched">
          Password needs to be at least {{controls.password.errors.minlength['requiredLength']}} characters long
        </div>
      </div>
      <input type="text" formControlName="confirmedPassword" placeholder="confirm password"/>
      <div *ngIf="signupForm.errors && controls.confirmedPassword.touched">
        Passwords need to match
      </div>
      <input type="submit"/>
    </form>
  `,
  providers: [UserService],
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  get controls() {
    return this.signupForm.controls;
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signupForm = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.minLength(8)], [validateUsernameUnique]],
      'password': ['', [Validators.required, Validators.minLength(8)]],
      'confirmedPassword': ['', [Validators.required, Validators.minLength(8)]]
    }, { validator: validatePasswordConfirmed }
    );
  }

  ngOnInit() {
  }

  submit() {
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.value);
    }
  }

}
