import { Component } from '@angular/core';
import { Produto } from '../../../Interface/Produto.interface';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-pedidos-loja',
  imports: [CommonModule, BarraLateralComponent],
  templateUrl: './pedidos-loja.component.html',
  styleUrl: './pedidos-loja.component.css'
})
export class PedidosLojaComponent {

produtoLista: Produto[] |null=null
valorLista:number = 0
pedidos:{produtos:Produto[], valor:number}[]=[]

ngOnInit(){
 

  this.click()

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

 if(this.produtoLista){
  const pedido ={
    produtos:[...this.produtoLista],
    valor:this.valorLista
  }
  this.pedidos.push(pedido)
 }


  
}
}
