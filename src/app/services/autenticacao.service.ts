import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Interface/Usuario.interface';

@Injectable({
  providedIn: 'root'
})



export class AutenticacaoService {


  
constructor(private http:HttpClient){
}
loginInputInfo:string []=[]


getApiInformation(apiInfo:Usuario[]){
console.log(apiInfo)
sessionStorage.setItem('apiUsuarios', JSON.stringify(apiInfo))
}

removeStorage(){
sessionStorage.removeItem('apiUsuarios')
localStorage.removeItem('valorData')
localStorage.removeItem('valorcheck')
}

postAPI(user:Usuario[]):Observable<Usuario[]>{
  const apiUrl="https://api-desafio-trilha-front-end.onrender.com/login"
  return this.http.post<Usuario[]>(apiUrl, user)
}


pegarValorCheck(valorcheck:any, valorData:any){
localStorage.setItem('valorcheck', JSON.stringify(valorcheck))
localStorage.setItem('valorData', JSON.stringify(valorData))
}



}

