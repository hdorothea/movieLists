import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyMovieListComponent } from './readonly-movie-list.component';

describe('ReadonlyMovieListComponent', () => {
  let component: ReadonlyMovieListComponent;
  let fixture: ComponentFixture<ReadonlyMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
