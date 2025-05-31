import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosContatoComponent } from './pedidos-contato.component';

describe('PedidosContatoComponent', () => {
  let component: PedidosContatoComponent;
  let fixture: ComponentFixture<PedidosContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosContatoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
