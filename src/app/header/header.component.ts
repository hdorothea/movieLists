import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <app-toggle-lioli-button></app-toggle-lioli-button>
    <div> MovieLists </div>
    <app-log-in-out-link></app-log-in-out-link>
    `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
}
