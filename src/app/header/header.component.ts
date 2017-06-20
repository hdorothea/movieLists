import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <app-toggle-lioli-button></app-toggle-lioli-button>
    <div> MovieLists </div>
    <app-toggle-login-button></app-toggle-login-button>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
