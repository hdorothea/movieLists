import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLioliButtonComponent } from './toggle-lioli-button.component';

describe('ToggleLioliButtonComponent', () => {
  let component: ToggleLioliButtonComponent;
  let fixture: ComponentFixture<ToggleLioliButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleLioliButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleLioliButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
