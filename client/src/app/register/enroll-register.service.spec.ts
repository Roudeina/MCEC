import { TestBed } from '@angular/core/testing';

import { EnrollRegisterService } from './enroll-register.service';

describe('EnrollRegisterService', () => {
  let service: EnrollRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
