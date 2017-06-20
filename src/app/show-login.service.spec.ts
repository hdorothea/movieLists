import { TestBed, inject } from '@angular/core/testing';

import { ShowLoginService } from './show-login.service';

describe('ToggleLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowLoginService]
    });
  });

  it('should ...', inject([ShowLoginService], (service: ShowLoginService) => {
    expect(service).toBeTruthy();
  }));
});
