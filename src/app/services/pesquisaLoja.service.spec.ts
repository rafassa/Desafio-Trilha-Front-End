import { TestBed } from '@angular/core/testing';

import { PesquisaService } from './pesquisaLoja.service';

describe('PesquisaService', () => {
  let service: PesquisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
