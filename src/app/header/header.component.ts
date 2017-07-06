import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="host">
      <app-toggle-lioli-button class="toggle-title"></app-toggle-lioli-button>
      <div id="app-title" (click)="goToHome()" class="toggle-title">
          MovieLists
      </div>
      <app-log-in-out-link></app-log-in-out-link>
    </div>
    `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) {
   }

  ngOnInit() {

  }

  goToHome() {
    this.router.navigate(['']);
  }
}
