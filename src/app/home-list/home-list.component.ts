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
    this.listsService.lists$
    .first(value => value.length > 0)
    .subscribe((lists) => this.router.navigate([`list/${lists[0].id}`]));
  }

}
