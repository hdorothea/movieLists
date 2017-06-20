import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleLioliEv on click', () => {
    component.showLioli = false;
    spyOn(component.toggleLioliEv, 'emit');

    const nativeEl = fixture.nativeElement;
    const toggleButton = nativeEl.querySelectorAll('#toggle-button')[0];
    toggleButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.toggleLioliEv.emit).toHaveBeenCalledWith(true);
  });
});
