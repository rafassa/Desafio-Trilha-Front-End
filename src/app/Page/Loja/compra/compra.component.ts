import { Component } from '@angular/core';
import { DisplayValorComponent } from '../display-valor/display-valor.component';
import { PagamentoComponent } from '../pagamento/pagamento.component';

@Component({
  selector: 'app-compra',
  imports: [DisplayValorComponent, PagamentoComponent],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {

}
