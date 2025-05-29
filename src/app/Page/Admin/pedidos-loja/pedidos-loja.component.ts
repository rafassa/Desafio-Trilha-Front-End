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
  produtoLista: Produto[]=[];
  valorLista: number=0;
  nomeLista: string='';
  pedidos: {  valor: number; nome: string; produtos: Produto[];}[]=[];

  ngOnInit() {
    this.pegarPedido()
    this.adicionarPedidoArray()
  }

  pegarPedido() {
    const nome = localStorage.getItem('nomePedido');
    const valor = localStorage.getItem('valorPedido');
    const produto = localStorage.getItem('itemPedido');

    if (produto && nome && valor) {
      this.nomeLista = nome
      this.valorLista = JSON.parse(valor)
      this.produtoLista = JSON.parse(produto) 
    }
  }


  adicionarPedidoArray(){
    const pedido ={
      nome:this.nomeLista,
      valor:this.valorLista,
      produtos:this.produtoLista
    }

    
    this.pedidos.push(pedido)
  }
}
