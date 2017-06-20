import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LioliComponent } from './lioli.component';

describe('MovieListBarComponent', () => {
  let component: LioliComponent;
  let fixture: ComponentFixture<LioliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LioliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LioliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
