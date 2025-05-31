import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosLojaComponent } from './pedidos-loja.component';

describe('PedidosLojaComponent', () => {
  let component: PedidosLojaComponent;
  let fixture: ComponentFixture<PedidosLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosLojaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
