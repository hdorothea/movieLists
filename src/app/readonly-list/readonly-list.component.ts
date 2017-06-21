import { Component, OnInit, Input} from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-readonly-list',
  template: `
    <div> {{ list.title }} </div>
    <div (click)="addToMovieLists()"> Add to lists </div>
    <app-list-view [list]="list"></app-list-view>
  `,
  styleUrls: ['./readonly-list.component.scss']
})
export class ReadonlyListComponent implements OnInit {
  @Input()
  list;

  constructor(private listsService: ListsService) {
  }

  ngOnInit() {
  }

  addToMovieLists() {
    this.listsService.add(this.list);

  }



}