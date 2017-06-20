import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LioliContainerComponent } from './lioli-container.component';

describe('BarViewComponent', () => {
  let component: LioliContainerComponent;
  let fixture: ComponentFixture<LioliContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LioliContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LioliContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
