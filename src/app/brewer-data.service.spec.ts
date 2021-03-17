import { TestBed } from '@angular/core/testing';

import { BrewerDataService } from './brewer-data.service';

describe('BrewerDataService', () => {
  let service: BrewerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
