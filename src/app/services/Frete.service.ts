import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mercado } from '../Interface/Mercado.interface';

@Injectable({
  providedIn: 'root'
})
export class FreteService {

 http = inject(HttpClient)

 getFrete(): Observable<Mercado[]> {
  return this.http.get<Mercado[]>('https://api-desafio-trilha-front-end.onrender.com/frete');
}




salvarValor(valor:number){
  localStorage.setItem('valorTransferencia', JSON.stringify(valor))
  console.log(valor)
}

}
