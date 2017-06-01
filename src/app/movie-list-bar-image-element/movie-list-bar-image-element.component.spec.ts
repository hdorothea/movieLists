import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListBarImageElementComponent } from './movie-list-bar-image-element.component';

describe('MovieListBarImageElementComponent', () => {
  let component: MovieListBarImageElementComponent;
  let fixture: ComponentFixture<MovieListBarImageElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListBarImageElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListBarImageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
