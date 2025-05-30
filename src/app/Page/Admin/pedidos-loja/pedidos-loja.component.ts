import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../Interface/Produto.interface';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { PedidosLojaService } from '../../../services/pedidos-loja.service';

@Component({
  selector: 'app-pedidos-loja',
  imports: [CommonModule, BarraLateralComponent],
  templateUrl: './pedidos-loja.component.html',
  styleUrl: './pedidos-loja.component.css',
})
export class PedidosLojaComponent implements OnInit {

  pedidos: { produtos: Produto[], nome: string, valor: number }[][] = [];

  constructor(private service: PedidosLojaService) {}

  ngOnInit() {
    this.pegarPedido();
    this.pedidos = this.service.devolverPedido();
    console.log('Pedidos armazenados:', this.pedidos); 
  }

  pegarPedido() {
    const produtoPedido = localStorage.getItem('itemPedido');
    const nomePedido = localStorage.getItem('nomePedido');
    const valorPedido = localStorage.getItem('valorPedido');

    if (produtoPedido && nomePedido && valorPedido) {
      const produtos = JSON.parse(produtoPedido);
      const nome = JSON.parse(nomePedido);
      const valor = JSON.parse(valorPedido);
      
      this.service.pegarInformacao(produtos, nome, valor);
    }
  }
}
