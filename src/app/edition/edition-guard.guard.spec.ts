import { TestBed } from '@angular/core/testing';

import { EditionGuardGuard } from './edition-guard.guard';

describe('EditionGuardGuard', () => {
  let guard: EditionGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditionGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
