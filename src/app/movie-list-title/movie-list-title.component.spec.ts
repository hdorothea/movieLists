import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTitleComponent } from './movie-list-title.component';

describe('MovieListTitleComponent', () => {
  let component: MovieListTitleComponent;
  let fixture: ComponentFixture<MovieListTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
