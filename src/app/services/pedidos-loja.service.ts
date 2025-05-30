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

      this.pedidos.push(pedidoPassado)

  }


  devolverPedido(){
    return this.pedidos
  }
}
