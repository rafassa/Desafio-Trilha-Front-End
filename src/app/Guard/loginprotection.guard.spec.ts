import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginprotectionGuard } from './loginprotection.guard';

describe('loginprotectionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      loginprotectionGuard(...guardParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
