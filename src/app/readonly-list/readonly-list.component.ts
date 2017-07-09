import { Component, OnInit, Input} from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-readonly-list',
  template: `
    <div *ngIf="list">
      <div class="title-container">
        <div class="readonly-list-title"> {{ list.title }} </div>
        <div class="add-to-lists-button" (click)="addToMovieLists()"> Add to lists </div>
      </div>
      <div class="container">
        <app-movie *ngFor="let movieBS of list.movieBSs" [movieBS]="movieBS"></app-movie>
      </div>
    </div>
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
