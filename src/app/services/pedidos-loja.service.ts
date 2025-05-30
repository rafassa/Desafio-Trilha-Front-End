import { Injectable } from '@angular/core';
import { Produto } from '../Interface/Produto.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosLojaService {



  private pedidos: {produtos:Produto[], nome:string, valor:number}[]=[]
  

  pegarInformacao(produtos:Produto[], nome:string, valor:number){
      const pedidoPassado = {
        produtos:produtos,
        nome:nome,
        valor:valor
      }
      this.pedidos = this.devolverPedidoAntigos()
      this.pedidos.push(pedidoPassado)
      localStorage.setItem('pedidosSalvos', JSON.stringify(this.pedidos))
      console.log("É esse o armazem de pedidos",this.pedidos)
  }


  devolverPedidoAntigos():any{
      const pedidosLocal = localStorage.getItem('pedidosSalvos')
    if(pedidosLocal){
      this.pedidos = JSON.parse(pedidosLocal)
    }
  }


  levarPedidos(){
    return this.pedidos
  }
}
