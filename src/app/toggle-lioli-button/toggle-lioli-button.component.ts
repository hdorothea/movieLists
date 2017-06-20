import { Component, OnInit } from '@angular/core';
import { ShowLioliService } from '../show-lioli.service';

@Component({
  selector: 'app-toggle-lioli-button',
  template: `
    <div (click)="toggleShowLioli()"> ≡ </div>
  `,
  styleUrls: ['./toggle-lioli-button.component.scss']
})
export class ToggleLioliButtonComponent implements OnInit {

  constructor(private showLioliService: ShowLioliService) { }

  ngOnInit() {
  }

  toggleShowLioli() {
    this.showLioliService.toggleShowLioli();
  }

}
