import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ShowLioliService } from './show-lioli.service';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ShowLioliService, useClass: FakeShowLioliService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have correct showLogin property value', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const showLioliService = fixture.debugElement.injector.get(ShowLioliService);
    showLioliService._showLioli$.next(true);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.getProperty('showLioli')).toBeTruthy();
  }));
});


class FakeShowLioliService {
  _showLioli$: BehaviorSubject<boolean>;
  showLioli$: Observable<boolean>;

  constructor() {
    this._showLioli$ = new BehaviorSubject(false);
    this.showLioli$ = this._showLioli$.asObservable();
  }

}
