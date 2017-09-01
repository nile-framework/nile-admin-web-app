import { TestBed, async, inject } from '@angular/core/testing';

import { LoginStatusGuard } from './login-status.guard';

describe('LoginStatusGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginStatusGuard]
    });
  });

  it('should ...', inject([LoginStatusGuard], (guard: LoginStatusGuard) => {
    expect(guard).toBeTruthy();
  }));
});
