import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LioliElementComponent } from './lioli-element.component';

describe('LioliElementComponent', () => {
  let component: LioliElementComponent;
  let fixture: ComponentFixture<LioliElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LioliElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LioliElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
