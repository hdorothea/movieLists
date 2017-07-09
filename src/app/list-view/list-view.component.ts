import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  template: `
    <div class="host" *ngIf="list">
      <app-list-element *ngFor="let movieBS of list.movieBSs" [movieBS]="movieBS"></app-list-element>
    </div>
  `,
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input()
  list;

  constructor() { }

  ngOnInit() {
  }

}
