import { TestBed } from '@angular/core/testing';

import { EasyBMService } from './easy-bm.service';

describe('EasyBMService', () => {
  let service: EasyBMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyBMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
