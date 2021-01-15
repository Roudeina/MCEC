import { TestBed } from '@angular/core/testing';

import { EnrollLoginService } from './enroll-login.service';

describe('EnrollLoginService', () => {
  let service: EnrollLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
