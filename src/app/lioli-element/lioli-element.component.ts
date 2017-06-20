import { Component, OnInit, Input } from '@angular/core';
import { List, ListsService} from '../lists.service';
import { CurrentListService} from '../current-list.service';

// this component is for when we already have the title of a list
// and we want to be able to update it on doubleclick and delete it on
// pressing x

@Component({
  selector: 'app-lioli-element',
  template: `
    <div [class.selected]="list === currentMovieList"
        class="element" (mouseover)="deletable = true" (mouseout)="deletable = false"
        (click)="setCurrentMovieList()">
      {{list.title}}
      <app-collage [list]="list"></app-collage>
      <span class="x" [style.visibility]="deletable? 'visible' : 'hidden'" (click)="deleteMovieList()">x</span>
    </div>
  `,
  styleUrls: ['./lioli-element.component.scss']
})
export class LioliElementComponent implements OnInit {
  @Input()
  list;

  deletable = false;

  get currentMovieList() {
    return this.currentListService.list;
  }

  constructor(private listsService: ListsService, private currentListService: CurrentListService) { }

  setCurrentMovieList() {
    this.currentListService.list = this.list;

  }

  deleteMovieList() {
    this.listsService.delete(this.list);
  }

  ngOnInit() {
  }


}
