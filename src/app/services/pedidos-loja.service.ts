import { Injectable } from '@angular/core';
import { Produto } from '../Interface/Produto.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosLojaService {

  private listaLoja: { valor: string | null, produto: string | null, nome: string | null }[] = [];

  pushLista(){
  const valorLista = localStorage.getItem('listaValor')
  const produtoLista = localStorage.getItem('valorLista')
  const nomeLista = localStorage.getItem('listaNome')


   const novoItem = { valor: valorLista, produto: produtoLista, nome: nomeLista };
    this.recuperarListaLoja()
    this.listaLoja.push(novoItem);
    localStorage.setItem('arrayPedidos', JSON.stringify(this.listaLoja))
  }

recuperarListaLoja() {
  const dados = localStorage.getItem('arrayPedidos');
  if (dados) {
    this.listaLoja = JSON.parse(dados);
  }
}


}
