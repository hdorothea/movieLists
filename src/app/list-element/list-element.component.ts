import { Component, OnInit, Input } from '@angular/core';
import { CurrentListService } from '../current-list.service';


@Component({
  selector: 'app-list-element',
  template: `
    <div class="list-element" (mouseover)="deletable = true" (mouseout)="deletable =  false">
      <app-movie [movieId]="movieId"> </app-movie>
      <span class="x" [style.visibility]="deletable ? 'visible':'hidden'" (click)="removeMovieFromList(movieId)"> x </span>
    </div>
  `,
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {
  @Input()
  movieId;

  deletable = false;

  constructor(private currentListService: CurrentListService) { }

  ngOnInit() {
  }

  removeMovieFromList(movieId: number) {
    this.currentListService.removeMovie(movieId);

  }

}
