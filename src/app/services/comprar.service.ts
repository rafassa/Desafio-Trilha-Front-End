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
    const url = "http://localhost:3000/"
      return this.http.get<Produto[]>(url)

    }

    PegarLocalInfo(produto: Produto) {
      
      const valor = localStorage.getItem("produto");
      let produtos: Produto[] = valor ? JSON.parse(valor) : [];   

   const produtoExistente = produtos.find(p => p.nome === produto.nome);
      if (produtoExistente) {
        produtoExistente.quantidade += 1; 
      } 
      localStorage.setItem("produto", JSON.stringify(produtos));
    }


   
    


  aumentarQuantidade(produto:Produto){
    produto.quantidade++
    this.pegarValor
  }
  pegarValor(valor:number){
    localStorage.setItem('valor', JSON.stringify(valor))
  }

  }
