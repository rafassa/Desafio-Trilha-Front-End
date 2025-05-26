import { Component } from '@angular/core';
import { Produto } from '../../../Interface/Produto.interface';

@Component({
  selector: 'app-pedidos-loja',
  imports: [],
  templateUrl: './pedidos-loja.component.html',
  styleUrl: './pedidos-loja.component.css'
})
export class PedidosLojaComponent {

produtoLista: Produto[]=[]
valorLista:number = 0
ngOnInit(){
 const produtos = localStorage.getItem('produtoLista')
  if(produtos){
    this.produtoLista =  produtos ? JSON.parse(produtos) : [];
  }
  const valores = localStorage.getItem('valorLista')
  if(valores){
    this.valorLista = JSON.parse(valores)
  }
}
}
