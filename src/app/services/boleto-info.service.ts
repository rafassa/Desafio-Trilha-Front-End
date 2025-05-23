import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletoInfoService {

  constructor() { }

  pegaInfoBoleto(info:any, valor:any){
    localStorage.setItem('boletoValor', JSON.stringify(info));
    localStorage.setItem('valorBoleto', JSON.stringify(valor));
  }


  
}
