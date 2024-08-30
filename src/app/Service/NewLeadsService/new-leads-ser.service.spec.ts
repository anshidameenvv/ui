import { TestBed } from '@angular/core/testing';

import { NewLeadsSerService } from './new-leads-ser.service';

describe('NewLeadsSerService', () => {
  let service: NewLeadsSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewLeadsSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
