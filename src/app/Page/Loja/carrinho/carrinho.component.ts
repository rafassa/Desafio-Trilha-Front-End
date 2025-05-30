import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ComprarService } from '../../../services/comprar.service';
import { Produto } from '../../../Interface/Produto.interface';
@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  produtosSelecionados:Produto[]=[]
  service = inject(ComprarService)
  router = inject(Router)
  total:number=0
  valorRec:string | null=null

  pegarProduto(){
    const valor = localStorage.getItem("produto");
    this.produtosSelecionados = valor ? JSON.parse(valor) : [];
  }
  removerItem(produto: Produto) {
    const index = this.produtosSelecionados.findIndex(p => p.nome === produto.nome);

    if (index !== -1) {
   
      if (this.produtosSelecionados[index].quantidade > 1) {
    
        this.produtosSelecionados[index].quantidade -= 1;
      } else {
    
        this.produtosSelecionados.splice(index, 1);
      }
     
      localStorage.setItem("produto", JSON.stringify(this.produtosSelecionados));
    }
  }


  adicionarItem(produto: Produto) {
    const index = this.produtosSelecionados.findIndex(p => p.nome === produto.nome);

    if (index !== -1) {
        
        this.produtosSelecionados[index].quantidade += 1;
    } 
    localStorage.setItem("produto", JSON.stringify(this.produtosSelecionados));
}


apagarItem(produto: Produto) {
  const index = this.produtosSelecionados.findIndex(p => p.nome === produto.nome);

  if (index !== -1) {
    this.produtosSelecionados.splice(index, 1);
  } 
  localStorage.setItem("produto", JSON.stringify(this.produtosSelecionados));
}




  getTotal(): number {
    return this.produtosSelecionados.reduce((total, item) => {
      return total + (item.preco * item.quantidade);
    }, 0);
  }

  levarTotal(){
    console.log()
this.service.pegarValor(this.getTotal(), this.produtosSelecionados.values())
this.router.navigate(['/frete'])
  }
}

