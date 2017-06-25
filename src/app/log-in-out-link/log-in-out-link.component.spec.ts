import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInOutLinkComponent } from './log-in-out-link.component';

describe('LogInOutLinkComponent', () => {
  let component: LogInOutLinkComponent;
  let fixture: ComponentFixture<LogInOutLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInOutLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInOutLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
