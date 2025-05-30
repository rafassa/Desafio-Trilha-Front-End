import { Component } from '@angular/core';
import { Produto } from '../../../Interface/Produto.interface';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-pedidos-loja',
  imports: [CommonModule, BarraLateralComponent],
  templateUrl: './pedidos-loja.component.html',
  styleUrl: './pedidos-loja.component.css',
})
export class PedidosLojaComponent {

listaPedidos: { valor: number | null, produto: Produto[] | null, nome: string | null }[] = []

  ngOnInit() {

    const dados = localStorage.getItem('arrayPedidos');
    if (dados) {
      this.listaPedidos = JSON.parse(dados);
    }
  }


}
