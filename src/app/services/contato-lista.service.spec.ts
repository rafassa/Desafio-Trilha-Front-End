import { TestBed } from '@angular/core/testing';

import { ContatoListaService } from './contato-lista.service';

describe('ContatoListaService', () => {
  let service: ContatoListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
