import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-collage',
  template: `
    <div class="bar-image">
      <img *ngFor="let movieBS of movieBSs" [src]="(movieBS | async).logoPath"/>
    </div>
  `,
  styleUrls: ['./collage.component.scss']
})
export class CollageComponent implements OnInit {
  @Input()
  list;

  get movieBSs() {
    return (<any>Object).values(this.list.movieBSs).slice(0, 4);
  }

  constructor(private movieService: MovieService) { }

  ngOnInit() {}
}
