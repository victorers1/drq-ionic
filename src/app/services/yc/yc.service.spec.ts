import { TestBed } from '@angular/core/testing';

import { YcService } from './yc.service';

describe('YcService', () => {
  let service: YcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
