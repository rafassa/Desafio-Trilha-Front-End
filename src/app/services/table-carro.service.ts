import { inject, Injectable } from '@angular/core';
import { Lancamento } from '../Interface/Lancamento.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableCarroService {

  constructor(private http:HttpClient){}


    getApi():Observable<Lancamento[]>{
      const apiUrl="https://api-desafio-trilha-front-end.onrender.com/lancamentoCarros"
      return  this.http.get<Lancamento[]>(apiUrl)
    }
}
