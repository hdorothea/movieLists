import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListBarComponent } from './movie-list-bar.component';

describe('MovieListBarComponent', () => {
  let component: MovieListBarComponent;
  let fixture: ComponentFixture<MovieListBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
