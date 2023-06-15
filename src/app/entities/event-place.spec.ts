import { TestBed } from '@angular/core/testing';

import { EventPlace } from './event-place';

describe('EventPlace', () => {
  let service: EventPlace;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPlace);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
