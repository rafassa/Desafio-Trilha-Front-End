import { Injectable } from '@angular/core';
import { Produto } from '../Interface/Produto.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosLojaService {

  private pedidos: { produtos: Produto[], nome: string, valor: number }[] = [];

  pegarInformacao(produtos: Produto[], nome: string, valor: number) {
      const pedidoPassado = { produtos, nome, valor };

      
      this.pedidos = this.devolverPedidoAntigos() || [];

      this.pedidos.push(pedidoPassado); 
      
      localStorage.setItem('pedidosSalvos', JSON.stringify(this.pedidos));
      console.log("É esse o armazém de pedidos:", this.pedidos);
  }

  devolverPedidoAntigos(): { produtos: Produto[], nome: string, valor: number }[] {
      const pedidosLocal = localStorage.getItem('pedidosSalvos');
      return pedidosLocal ? JSON.parse(pedidosLocal) : []; 
  }

  levarPedidos() {
    return this.pedidos;
  }
}
