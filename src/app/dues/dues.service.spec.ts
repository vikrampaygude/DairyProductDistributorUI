import { TestBed, inject } from '@angular/core/testing';

import { DuesService } from './dues.service';

describe('DuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DuesService]
    });
  });

  it('should be created', inject([DuesService], (service: DuesService) => {
    expect(service).toBeTruthy();
  }));
});
