import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTitleInputComponent } from './movie-list-title-input.component';

describe('MovieListTitleInputComponent', () => {
  let component: MovieListTitleInputComponent;
  let fixture: ComponentFixture<MovieListTitleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTitleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTitleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
