import { TestBed } from '@angular/core/testing';

import { CouresService } from './coures.service';

describe('CouresService', () => {
  let service: CouresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
