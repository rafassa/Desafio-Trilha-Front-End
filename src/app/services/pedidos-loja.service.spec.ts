import { TestBed } from '@angular/core/testing';

import { PedidosLojaService } from './pedidos-loja.service';

describe('PedidosLojaService', () => {
  let service: PedidosLojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosLojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
