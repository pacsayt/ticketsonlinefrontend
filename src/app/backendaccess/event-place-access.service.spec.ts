import { TestBed } from '@angular/core/testing';

import { EventPlaceAccessService } from './event-place-access.service';

describe('EventPlaceAccessService', () => {
  let service: EventPlaceAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPlaceAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
