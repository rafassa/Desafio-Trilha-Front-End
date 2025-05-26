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
ngOnInit(){
  

  
}

click(){
  const produtos = localStorage.getItem('produtoLista')
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
