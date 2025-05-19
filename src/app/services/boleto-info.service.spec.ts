import { TestBed } from '@angular/core/testing';

import { BoletoInfoService } from './boleto-info.service';

describe('BoletoInfoService', () => {
  let service: BoletoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoletoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
