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

produtoLista: Produto[]=[]
valorLista:number = 0
nomeLista:string = ''
pedidos:{produtos:Produto[], valor:number, nome:string}[]=[]

ngOnInit() {
 this.click()


 const pedido ={
  produtos: this.produtoLista,
  valor:this.valorLista,
  nome:this.nomeLista,
 }

this.pedidos.push(pedido)
}




click(){
  const produtos = localStorage.getItem('itemLista');
  const nome = localStorage.getItem('nomePedido');
  const valores = localStorage.getItem('valorLista');
  if(produtos && valores && nome){
    this.produtoLista =  produtos ? JSON.parse(produtos) : [];
    this.valorLista = JSON.parse(valores);
      this.nomeLista = JSON.parse(nome);
  }
  


 
}


limparPedidos() {
  localStorage.removeItem('pedidos');
  this.pedidos = []; 
}
}
