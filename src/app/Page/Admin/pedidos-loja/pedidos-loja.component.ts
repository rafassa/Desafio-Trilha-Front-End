import { Component } from '@angular/core';
import { Produto } from '../../../Interface/Produto.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos-loja',
  imports: [CommonModule],
  templateUrl: './pedidos-loja.component.html',
  styleUrl: './pedidos-loja.component.css'
})
export class PedidosLojaComponent {

produtoLista: Produto[] |null=null
valorLista:number = 0
pedidoLista:any
ngOnInit(){
  const produtos = localStorage.getItem('itemLista')
  if(produtos){
    this.produtoLista =  produtos ? JSON.parse(produtos) : [];
  }
  const valores = localStorage.getItem('valorLista')
  if(valores){
    this.valorLista = JSON.parse(valores)
  }


  const pedidosMap = new Map<number, any>();


  this.produtoLista?.forEach((produto , index)=>{
    pedidosMap.set(index+1, {numero:index +1, produtos:[produto]})
  })

  this.pedidoLista = Array.from(pedidosMap.values())

}

click(){
  const produtos = localStorage.getItem('itemLista')
  if(produtos){
    this.produtoLista =  produtos ? JSON.parse(produtos) : [];
  }
  const valores = localStorage.getItem('valorLista')
  if(valores){
    this.valorLista = JSON.parse(valores)
  }

  console.log(this.produtoLista)
  console.log(this.valorLista)
}
}
