import { TestBed } from '@angular/core/testing';

import { BookedTicket } from './booked-ticket';

describe('BookedTicket', () => {
  let service: BookedTicket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookedTicket);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
