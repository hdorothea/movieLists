import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListTitleComponent } from './new-list-title.component';

describe('MovieListTitleInputComponent', () => {
  let component: NewListTitleComponent;
  let fixture: ComponentFixture<NewListTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
