import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTitleElementComponent } from './movie-list-title-element.component';

describe('movieListTitleElementComponent', () => {
  let component: MovieListTitleElementComponent;
  let fixture: ComponentFixture<MovieListTitleElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTitleElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTitleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
