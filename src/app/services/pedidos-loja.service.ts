import { Injectable } from '@angular/core';
import { Produto } from '../Interface/Produto.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidosLojaService {

  private listaLoja: { valor: number | null, produto: Produto[] | null, nome: string | null }[] = [];
  valorConvertido:number = 0
  nomeConvertido:string = ''
  ProdutoConvertido:Produto[]=[]
  pushLista(){
  const valorLista = localStorage.getItem('listaValor')
  const produtoLista = localStorage.getItem('listaProdutos')
  const nomeLista = localStorage.getItem('listaNome')

  if(valorLista && produtoLista && nomeLista){
    this.valorConvertido = JSON.parse(valorLista)
    this.nomeConvertido = JSON.parse(nomeLista)
    this.ProdutoConvertido = JSON.parse(produtoLista)
  }


   const novoItem = { valor:this.valorConvertido, produto: this.ProdutoConvertido, nome: this.nomeConvertido };
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
