import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  template: `
  `,
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  constructor(private listsService: ListsService, private router: Router) { }

  ngOnInit() {
    this.listsService
    .setCurrentListFromId('0');
  }

}
