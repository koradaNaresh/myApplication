import { TestBed } from '@angular/core/testing';

import { GlobalshareService } from './globalshare.service';

describe('GlobalshareService', () => {
  let service: GlobalshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
