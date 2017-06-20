import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorLinkComponent } from './director-link.component';

describe('DirectorLinkComponent', () => {
  let component: DirectorLinkComponent;
  let fixture: ComponentFixture<DirectorLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
