import { TestBed } from '@angular/core/testing';

import { AuthApiCmsInterceptor } from './auth-api-cms.interceptor';

describe('AuthApiCmsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthApiCmsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthApiCmsInterceptor = TestBed.inject(AuthApiCmsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
