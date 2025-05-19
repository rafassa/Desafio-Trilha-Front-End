import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletoInfoService {

  constructor() { }

  pegaInfoBoleto(info:any){
    localStorage.setItem('boletoValor', JSON.stringify(info))
    console.log(info)
  }


  
}
