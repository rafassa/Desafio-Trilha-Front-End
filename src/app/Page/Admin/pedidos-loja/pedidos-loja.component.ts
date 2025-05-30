import { Component, inject } from '@angular/core';
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
export class PedidosLojaComponent {


 service = inject(PedidosLojaService)

produtos:Produto[]=[]
nome:string =''
valor:number=0

pedidos: {produtos:Produto[], nome:string, valor:number}[]=[]

ngOnInit(){
  this.pegarPedido()


  this.pedidos = this.service.levarPedidos()
  
}

pegarPedido(){
  const produtoPedido = localStorage.getItem('itemPedido')
  const nomePedido = localStorage.getItem('nomePedido')
  const valorPedido= localStorage.getItem('valorPedido')


  if(produtoPedido && nomePedido && valorPedido){
    this.produtos = JSON.parse(produtoPedido)
    this.nome = JSON.parse(nomePedido)
    this.valor = JSON.parse(valorPedido)
  }

this.service.pegarInformacao(this.produtos, this.nome, this.valor)
localStorage.removeItem('itemPedido')
localStorage.removeItem('nomePedido')
localStorage.removeItem('valorPedido')
}


}
