  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import {  Observable } from 'rxjs';
import { Produto } from '../Interface/Produto.interface';
  @Injectable({
    providedIn: 'root'
  })
  export class ComprarService {

 

ngOnInit(produto:Produto){

}
    constructor(private http:HttpClient) { }

    adicionar():Observable<Produto[]>{
    const url = "https://api-desafio-trilha-front-end.onrender.com/produtos"
      return this.http.get<Produto[]>(url)

    }

    PegarLocalInfo(produto: Produto) {
      const valor = localStorage.getItem("produto");
      
     
      let produtos: Produto[] = valor ? JSON.parse(valor) : [];
      if (!Array.isArray(produtos)) {
        produtos = [];
      }
    
      const produtoExistente = produtos.find(p => p.nome === produto.nome);
      if (produtoExistente) {
        produtoExistente.quantidade += 1;
      } else {
        produtos.push({ ...produto, quantidade: 1 }); 
      }
    
      localStorage.setItem("produto", JSON.stringify(produtos));
      console.log(localStorage.getItem("produto"));
    }
    


   
    


  aumentarQuantidade(produto:Produto){
    produto.quantidade++
    this.pegarValor
  }
  pegarValor(valor:number, itens:Produto[]){
    localStorage.setItem('valor', JSON.stringify(valor))
    localStorage.setItem('valorLista', JSON.stringify(valor))
    localStorage.setItem('itemLista', JSON.stringify(itens))
  }

  }
