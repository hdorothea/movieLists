import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-banner',
  template: `
    <div *ngFor="let error of errors">{{error}}</div>
  `,
  styleUrls: ['./form-error-banner.component.scss']
})
export class FormErrorBannerComponent implements OnInit {
  @Input()
  errors;

  constructor() { }

  ngOnInit() {
  }

}
