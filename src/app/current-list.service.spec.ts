import { TestBed, inject } from '@angular/core/testing';

import { CurrentListService } from './current-list.service';

describe('CurrentListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentListService]
    });
  });

  it('should ...', inject([CurrentListService], (service: CurrentListService) => {
    expect(service).toBeTruthy();
  }));
});
