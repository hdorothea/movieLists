import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorBannerComponent } from './form-error-banner.component';

describe('FormErrorBannerComponent', () => {
  let component: FormErrorBannerComponent;
  let fixture: ComponentFixture<FormErrorBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormErrorBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
