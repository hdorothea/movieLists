import { TestBed, inject } from '@angular/core/testing';

import { ShowLioliService } from './show-lioli.service';

describe('ShowLioliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowLioliService]
    });
  });

  it('should ...', inject([ShowLioliService], (service: ShowLioliService) => {
    expect(service).toBeTruthy();
  }));
});
