import { Component, OnInit, Input } from '@angular/core';
import { CurrentListService } from '../current-list.service';


@Component({
  selector: 'app-list-element',
  template: `
    <div class="list-element" (mouseover)="deletable = true" (mouseout)="deletable =  false">
      <app-movie [movieBS]="movieBS"> </app-movie>
      <span class="x" [style.visibility]="deletable ? 'visible':'hidden'" (click)="removeMovieFromList()">ⓧ</span>
    </div>
  `,
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {
  movieId;
  @Input()
  movieBS;

  deletable = false;

  constructor(private currentListService: CurrentListService) { }

  ngOnInit() {
    this.movieBS.subscribe((movie) =>  {this.movieId = movie.id; });
  }

  removeMovieFromList() {
    this.currentListService.removeMovie(this.movieId);

  }

}
