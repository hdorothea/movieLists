import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLoginButtonComponent } from './toggle-login-button.component';

describe('ToggleLoginButtonComponent', () => {
  let component: ToggleLoginButtonComponent;
  let fixture: ComponentFixture<ToggleLoginButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleLoginButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
