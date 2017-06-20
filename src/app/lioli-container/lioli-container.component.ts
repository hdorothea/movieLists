import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lioli-container',
  template: `
    <app-new-list-title></app-new-list-title>
    <app-lioli></app-lioli>
  `,
  styleUrls: ['./lioli-container.component.scss']
})
export class LioliContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
