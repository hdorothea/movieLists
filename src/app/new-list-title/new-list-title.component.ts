import { Component, OnInit } from '@angular/core';
import { List, ListsService } from '../lists.service';
import { CurrentListService } from '../current-list.service';

@Component({
  selector: 'app-new-list-title',
  template: `
    <div class="title-input">
      <input #newListTitleInputEl (keyup.enter)="addNewList(newListTitleInputEl)" placeholder="New List"/>
      <span (click)=addNewList(newListTitleInputEl) id="plus-icon">+</span>
    <div>
  `,
  styleUrls: ['./new-list-title.component.scss'],
})
export class NewListTitleComponent implements OnInit {

  constructor(private listsService: ListsService) {
  }

  ngOnInit() {
  }

  addNewList(inputElement: HTMLInputElement) {
    this.listsService.addNewList(inputElement.value);
    inputElement.value = '';
  }

}
