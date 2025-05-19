import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  constructor() { }

 private pesquisaBehavior = new BehaviorSubject<string>('')
 pesquisaObservable = this.pesquisaBehavior.asObservable()



 updatePesquisa(pesquisaValor:string){
this.pesquisaBehavior.next(pesquisaValor)
 }
}
