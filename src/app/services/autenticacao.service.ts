import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Interface/Usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private http: HttpClient) {
    const checkboxValor = localStorage.getItem('valorDataRapida');
    if (checkboxValor) {
      localStorage.setItem('valorData', checkboxValor);
    }
  }
  loginInputInfo: string[] = [];

  getApiInformation(apiInfo: Usuario[]) {
    console.log(apiInfo);
    sessionStorage.setItem('apiUsuarios', JSON.stringify(apiInfo));
  }

  removeStorage() {
    localStorage.removeItem('valorcheck');
    sessionStorage.removeItem('valorDataRapida');
    sessionStorage.removeItem('apiUsuarios');
    localStorage.removeItem('valorData');
  }

  postAPI(user: Usuario[]): Observable<Usuario[]> {
    const apiUrl = 'https://api-desafio-trilha-front-end.onrender.com/login';
    return this.http.post<Usuario[]>(apiUrl, user);
  }

  pegarValorCheck(valorcheck: any, valorData: any) {
    const check = localStorage.getItem('valorcheck')
    localStorage.setItem('valorcheck', JSON.stringify(valorcheck));
    sessionStorage.setItem('valorDataRapida', JSON.stringify(valorData));

    if(check){
    localStorage.setItem('valorData',JSON.stringify(valorData))
  }
}
}
