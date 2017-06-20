import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-director-link',
  template: `
    <div (click)="goToDirectorMovieList(director.name, director.id)"> {{director.name}}</div>
  `,
  styleUrls: ['./director-link.component.scss']
})
export class DirectorLinkComponent implements OnInit {
  @Input()
  director;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDirectorMovieList(name, id) {
    this.router.navigate([`list/director/${this.director.name}/${this.director.id}`]);
  }

}
